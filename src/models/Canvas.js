export default class Canvas {
  constructor(selector, options) {
    this.el = document.querySelector(selector)
    this.positions = []
    this.width = options.width
    this.height = options.height
    this.onClick = options.onClick.bind(this)
    this.init()
  }

  init() {
    this.ctx = this.el.getContext('2d')
    this.el.setAttribute('width', this.width)
    this.el.setAttribute('height', this.height)

    const { x, y } = this.el.getBoundingClientRect()
    this.offsetX = x
    this.offsetY = y
    this.el.addEventListener('click', this.onClick)
  }

  getCloserPosition(x) {
    let minVal = null
    let position = null
    this.positions.forEach((pos) => {
      const distance = Math.abs(pos - x)
      if (minVal === null || distance < minVal) {
        minVal = distance
        position = pos
      }
    })

    return position
  }

  drawElement(element) {
    element.draw(this.ctx)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  redraw(...elements) {
    this.clear()
    elements.forEach((element) => {
      this.drawElement(element)
    })
  }
}
