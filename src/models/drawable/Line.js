import { ElementTypes } from '../../enum/ElementTypes'
import Drawable from '../Drawable'

export default class Line extends Drawable {
  constructor(startX, startY, endX, endY) {
    super(ElementTypes.LINE)
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
  }

  static connectDots(dots) {
    const lines = []
    const sotredDots = [...dots].sort((a, b) =>
      a.x > b.x ? 1 : b.x > a.x ? -1 : 0
    )

    sotredDots.forEach((dot, index, array) => {
      const next = array[index + 1]
      if (!next) return

      const line = new Line(dot.x, dot.y, next.x, next.y)
      return lines.push(line)
    })
    return lines
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
  }
}
