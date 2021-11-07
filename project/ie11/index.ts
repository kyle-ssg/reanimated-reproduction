import './array-from'

if (typeof window !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value: function (callback, type, quality) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const canvas = this
      setTimeout(function () {
        const binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
          len = binStr.length,
          arr = new Uint8Array(len)

        for (let i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i)
        }

        callback(new Blob([arr], { type: type || 'image/png' }))
      })
    },
  })
}

if (typeof window === 'undefined') {
  // @ts-ignore
  global.requestAnimationFrame = (cb) => {
    cb()
  }
}
