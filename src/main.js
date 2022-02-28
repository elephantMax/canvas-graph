import Canvas from './models/Canvas'

//style
import './assets/index.css'

const canvas = new Canvas('#canvas', {
  width: 800,
  height: 600,
})

const clearButton = document.querySelector('#button-clear')

clearButton.addEventListener('click', () => {
  canvas.reset()
})

const canvas2 = new Canvas('#canvas-2', {
  width: 500,
  height: 400,
})
