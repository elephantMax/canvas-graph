export default class Animation {
  static run(callback) {
    return new Promise(async (resolve) => {
      const result = callback()
      if (result === false) {
        return resolve(true)
      }

      window.requestAnimationFrame(() => {
        resolve(Animation.run(callback))
      })
    })
  }
}
