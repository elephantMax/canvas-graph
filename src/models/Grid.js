export default class Grid {
  constructor(options) {
    this.colls = options.colls
    this.rows = options.rows
    this.marginX = options.marginY
    this.width = options.width
    this.height = options.height
    this.lineWidth = options.lineWidth
    this.xPositions = []
    this.yPositions = []
  }

  generateGrid() {
    const gapBetweenDotsX = Math.floor(this.width / this.colls)
    const gapBetweenDotsY = Math.floor(this.height / this.rows)
    for (let i = 0; i <= this.colls; i++) {
      const x = this.marginX + i * gapBetweenDotsX
      this.xPositions.push(x)
    }

    for (let i = 0; i < this.rows; i++) {
      const y = this.marginX + i * gapBetweenDotsY
      this.yPositions.push(y)
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#ABABAB'
    this.xPositions.forEach((x) => {
      ctx.fillRect(x, 0, this.lineWidth, this.height)
    })
    this.yPositions.forEach((y) => {
      ctx.fillRect(0, y, this.width, this.lineWidth)
    })
  }

  getClosestColl(x) {
    let minDistance = null
    let position = null

    this.xPositions.forEach((pos) => {
      const distance = Math.abs(x - pos)

      if (minDistance === null || distance <= minDistance) {
        minDistance = distance
        position = pos
      }
    })

    return position
  }
}
