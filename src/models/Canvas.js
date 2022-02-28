import { ElementTypes } from '../enum/ElementTypes'
import Animation from './Animation'
import Dot from './drawable/Dot'
import Grid from './drawable/Grid'
import Line from './drawable/Line'

const GRID_LINE_WIDTH = 1
const GRID_MARGIN_X = 50

const getInitElements = () => ({
  [ElementTypes.LINE]: [],
  [ElementTypes.DOT]: [],
})

export default class Canvas {
  constructor(selector, options) {
    this.el = document.querySelector(selector)
    this.width = options.width
    this.height = options.height
    this.elements = getInitElements(this)
    this.init()
  }

  setGrid() {
    this.grid = new Grid({
      colls: 10,
      rows: 10,
      width: this.width,
      height: this.height,
      lineWidth: GRID_LINE_WIDTH,
      marginX: GRID_MARGIN_X,
    })

    this.grid.generateGrid()
  }

  setOffsets() {
    const { x, y } = this.el.getBoundingClientRect()
    this.offsetX = x
    this.offsetY = y
  }

  addEventListener() {
    this.clickHandler = this.clickHandler.bind(this)
    this.el.addEventListener('click', this.clickHandler)
    window.addEventListener('resize', this.setOffsets)
    window.addEventListener('scroll', this.setOffsets)
  }

  init() {
    this.ctx = this.el.getContext('2d')
    this.el.setAttribute('width', this.width)
    this.el.setAttribute('height', this.height)
    this.setGrid()
    this.drawElement(this.grid)
    this.setOffsets = this.setOffsets.bind(this)
    this.setOffsets()
    this.addEventListener()
  }

  addElement(element) {
    const { type } = element
    this.elements[type].push(element)
  }

  drawElement(element) {
    element.draw(this.ctx)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.drawElement(this.grid)
  }

  redraw() {
    this.clear()
    this.elements[ElementTypes.LINE] = Line.connectDots(
      this.elements[ElementTypes.DOT]
    )
    Object.values(this.elements).forEach((arr) => {
      arr.forEach((element) => {
        this.drawElement(element)
      })
    })
  }

  async clickHandler(e) {
    const { clientX, clientY } = e
    const x = clientX - this.offsetX
    const y = clientY - this.offsetY
    const xPos = this.grid.getClosestColl(x)
    const dotInSelectedPos = this.elements[ElementTypes.DOT].find(
      (item) => item.x === xPos
    )
    if (dotInSelectedPos) {
      let yPos = dotInSelectedPos.y
      const step = 5
      const directionTop = y > dotInSelectedPos.y
      await Animation.run(() => {
        yPos = directionTop ? yPos + step : yPos - step
        const newDot = new Dot(xPos, yPos)
        this.addElement(newDot)
        this.redraw()
        this.elements[ElementTypes.DOT] = this.elements[
          ElementTypes.DOT
        ].filter((dot) => dot.x !== newDot.x)
        if ((directionTop && yPos >= y) || (!directionTop && yPos <= y)) {
          return false
        }
      })
    }
    this.addElement(new Dot(xPos, y))
    this.redraw()
  }

  reset() {
    this.clear()
    this.elements = getInitElements()
  }
}
