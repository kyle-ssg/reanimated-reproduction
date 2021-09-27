import fetch from 'isomorphic-unfetch' // we do this here instead of _data.js as it intereferes with react-native

import './ie11'
import 'common/global-rn'
import 'common/components/grid/'
import Fade from 'common/components/animation/Fade'
import 'common/style/_style_screen'
global.Fade = Fade
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

import {
  AsyncStorage,
  AppState,
  NetInfo,
  Clipboard,
} from 'polyfill-react-native'
import './localization'
import '../common/utils'
import './api'
import './libs'

import React from 'react'
import Link from 'next/link'

global.AppState = AppState
global.NetInfo = NetInfo
global.Clipboard = Clipboard
global.AsyncStorage = AsyncStorage
global.Link = Link
