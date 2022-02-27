import Canvas from './models/Canvas'
import Grid from './models/Grid'
import Dot from './models/Dot'
import Line from './models/Line'
import Animation from './models/Animation'

//style
import './assets/index.css'

//constants
const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 600

const MAX_DOTS_COUNT = 10

const GRID_LINE_WIDTH = 1
const GRID_MARGIN_X = 50

const canvas = new Canvas('#canvas', {
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  onClick: canvasClickHandler,
})

const grid = new Grid({
  colls: MAX_DOTS_COUNT,
  rows: MAX_DOTS_COUNT,
  marginY: GRID_MARGIN_X,
  width: canvas.width,
  height: canvas.height,
  lineWidth: GRID_LINE_WIDTH,
})

grid.generateGrid()

canvas.drawElement(grid)

const rerenderAll = () => {
  Line.lines = []
  Dot.connectDots()
  canvas.redraw(grid, ...Dot.dots, ...Line.lines)
}

async function canvasClickHandler(e) {
  const { clientX, clientY } = e
  const x = clientX - this.offsetX
  const y = clientY - this.offsetY
  const xPos = grid.getClosestColl(x)
  const dotInSelectedPos = Dot.dots.find((item) => item.x === xPos)
  if (dotInSelectedPos) {
    let yPos = dotInSelectedPos.y
    const step = 5
    const directionTop = y > dotInSelectedPos.y
    await Animation.run(() => {
      yPos = directionTop ? yPos + step : yPos - step
      const newDot = new Dot(xPos, yPos)
      rerenderAll()
      newDot.remove()
      if ((directionTop && yPos >= y) || (!directionTop && yPos <= y)) {
        return false
      }
    })
  }
  new Dot(xPos, y)
  rerenderAll()
}

const clearButton = document.querySelector('#button-clear')

clearButton.addEventListener('click', () => {
  canvas.clear()
  Dot.dots = []
  Line.lines = []
  canvas.drawElement(grid)
})
