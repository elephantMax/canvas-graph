import CanvasElement from './CanvasElement'
import Line from './Line'

export default class Dot extends CanvasElement {
  static dots = []

  constructor(x, y) {
    super(x, y)
    this.size = 5
    this.left = null
    this.right = null
    Dot.dots.push(this)
  }

  static connectDots() {
    const dots = [...Dot.dots].sort((a, b) =>
      a.x > b.x ? 1 : b.x > a.x ? -1 : 0
    )

    dots.forEach((dot) => {
      const next = dot.getClosestRight()
      if (!next) return

      new Line(dot.x, dot.y, next.x, next.y)
    })
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fillStyle = '#000'
    ctx.fill()
    ctx.stroke()
  }

  remove() {
    Dot.dots = Dot.dots.filter((dot) => dot.x !== this.x)
  }

  getClosestLeft() {
    const leftDots = Dot.dots
      .filter((dot) => dot.x < this.x)
      .sort((a, b) => (a.x < b.x ? 1 : b.x < a.x ? -1 : 0))

    if (!leftDots.length) {
      return null
    }
    return leftDots[0]
  }

  getClosestRight() {
    const rightDots = Dot.dots
      .filter((dot) => dot.x > this.x)
      .sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0))

    if (!rightDots.length) {
      return null
    }
    return rightDots[0]
  }
}
