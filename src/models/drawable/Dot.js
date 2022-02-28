import Drawable from '../Drawable'
import { ElementTypes } from '../../enum/ElementTypes'

export default class Dot extends Drawable {
  constructor(x, y) {
    super(ElementTypes.DOT)
    this.x = x
    this.y = y
    this.size = 5
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
    let minDistance = null
    let closest = null

    Dot.dots.forEach((dot) => {
      if (dot.x >= this.x) return
      const distance = Math.abs(dot.x - this.x)
      if (minDistance === null || minDistance > distance) {
        closest = dot
        minDistance = distance
      }
    })
    return closest
  }

  getClosestRight() {
    let minDistance = null
    let closest = null

    Dot.dots.forEach((dot) => {
      if (dot.x <= this.x) return
      const distance = Math.abs(dot.x - this.x)
      if (minDistance === null || minDistance > distance) {
        closest = dot
        minDistance = distance
      }
    })
    return closest
  }
}
