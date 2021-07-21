import BaseFormat from './base/_format'

const Format = (global.Format = Object.assign({}, BaseFormat, {
  bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return '0 Byte'
    // @ts-ignore
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    // @ts-ignore
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
  },
}))

export default Format
