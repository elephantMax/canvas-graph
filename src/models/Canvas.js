export default class Canvas {
  constructor(selector, options) {
    this.el = document.querySelector(selector)
    this.positions = []
    this.width = options.width
    this.height = options.height
    this.onClick = options.onClick.bind(this)
    this.init()
  }

  setOffsets() {
    const { x, y } = this.el.getBoundingClientRect()
    this.offsetX = x
    this.offsetY = y
  }

  init() {
    this.ctx = this.el.getContext('2d')
    this.el.setAttribute('width', this.width)
    this.el.setAttribute('height', this.height)
    this.setOffsets = this.setOffsets.bind(this)
    this.setOffsets()
    this.el.addEventListener('click', this.onClick)
    window.addEventListener('resize', this.setOffsets)
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
