import Canvas from './models/Canvas'
import Grid from './models/Grid'
import Dot from './models/Dot'
import Line from './models/Line'

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

canvas.drawElement(grid)

function canvasClickHandler(e) {
  const { clientX, clientY } = e
  const x = clientX - this.offsetX
  const y = clientY - this.offsetY
  const xPos = grid.getCloserColl(x)
  const dotInSelectedPos = Dot.dots.find((item) => item.x === xPos)
  if (dotInSelectedPos) {
    dotInSelectedPos.remove()
  }
  new Dot(xPos, y)
  Line.lines = []
  Dot.connectDots()
  this.redraw(grid, ...Dot.dots, ...Line.lines)
}

const clearButton = document.querySelector('#button-clear')

clearButton.addEventListener('click', () => {
  canvas.clear()
  Dot.dots = []
  Line.lines = []
  canvas.drawElement(grid)
})
