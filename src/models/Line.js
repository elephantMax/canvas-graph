export default class Line {
  static lines = []

  constructor(startX, startY, endX, endY) {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
    Line.lines.push(this)
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
  }
}
