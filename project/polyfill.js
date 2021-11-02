import fetch from 'isomorphic-unfetch' // we do this here instead of _data.js as it intereferes with react-native
import './ie11'
import 'common/global-rn'
import 'mobile/app/components/base/grid'
// import Fade from 'common/components/animation/Fade'
import 'mobile/app/style/_style_screen'
import 'mobile/app/components/base/type'
import 'mobile/app/components/base/grid'
import './localization'
import '../common/utils'
import './api'
import './libs'

import React from 'react'
import Link from 'next/link'

// global.Fade = Fade
global.fetch = fetch

if (typeof window !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value: function (callback, type, quality) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let canvas = this
      setTimeout(function () {
        let binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
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
if (typeof projectOverrides !== 'undefined') {
  global.Project = {
    ...global.Project,
    ...projectOverrides, // environment.js (also app.yaml if using app engine)
  }
}

global.Link = Link
