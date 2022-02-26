export default class Animation {
  static run(callback) {
    const result = callback()

    if (result === false) return

    window.requestAnimationFrame(() => {
      Animation.run(callback)
    })
  }
}
