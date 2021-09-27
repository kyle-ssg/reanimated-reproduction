import './array-from'
if (typeof window === 'undefined') {
  global.requestAnimationFrame = (cb) => {
    cb()
  }
}
