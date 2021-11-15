import fetch from 'isomorphic-unfetch' // we do this here instead of _data.js as it intereferes with react-native
import './ie11'
import 'common/global-rn'
import 'mobile/app/components/base/grid'
import Fade from 'mobile/app/components/base/animation/Fade'
import 'mobile/app/style/_style_screen'
import 'mobile/app/components/base/type'
import 'mobile/app/components/base/grid'
import './localization'
import '../common/utils'
import './api'
import './libs'

import React from 'react'
import Link from 'next/link'

global.Fade = Fade
global.fetch = fetch

if (typeof projectOverrides !== 'undefined') {
  global.Project = {
    ...global.Project,
    ...projectOverrides, // environment.js (also app.yaml if using app engine)
  }
}

global.Link = Link
