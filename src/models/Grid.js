export default class Grid {
  constructor(options) {
    this.colls = options.colls
    this.rows = options.rows
    this.marginX = options.marginY
    this.width = options.width
    this.height = options.height
    this.lineWidth = options.lineWidth
    this.positions = []
  }

  draw(ctx) {
    const gapBetweenDotsX = Math.floor(this.width / this.colls)
    const gapBetweenDotsY = Math.floor(this.height / this.rows)

    ctx.fillStyle = '#ABABAB'
    for (let i = 0; i <= this.colls; i++) {
      const x = this.marginX + i * gapBetweenDotsX
      ctx.fillRect(x, 0, this.lineWidth, this.height)
      this.positions.push(x)
    }

    for (let i = 0; i < this.rows; i++) {
      const y = this.marginX + i * gapBetweenDotsY
      ctx.fillRect(0, y, this.width, this.lineWidth)
    }
  }

  getCloserColl(x) {
    let minDistance = null
    let position = null

    this.positions.forEach((pos) => {
      const distance = Math.abs(x - pos)

      if (minDistance === null || distance <= minDistance) {
        minDistance = distance
        position = pos
      }
    })

    return position
  }
}
