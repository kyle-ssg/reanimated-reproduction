import React from 'react'
import { Provider } from 'react-redux'
import { withInfo } from '@storybook/addon-info/dist/index'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import '../styles/Global.scss'
import '../project/polyfill'
import _store from '../common/store'

const isTest = process.env.TEST

export const store = _store()

export const withProvider = (story) => (
  <Provider store={store}>{story()}</Provider>
)

export const withPaddedContainer = (story) => (
  <div style={{ paddingTop: 50 }} className='container'>
    {story()}
    <div id='confirm' />
    <div id='alert' />
  </div>
)

export const getStory = (name, options: any = {}) => {
  let res = storiesOf(name, module)

  if (!isTest) {
    // jest can't parse this module so we only add it when needed
    res = res.addDecorator(
      require('storybook-addon-smart-knobs').withSmartKnobs({
        ignoreProps: options.ignoreProps,
      }),
    )
  }

  return res
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .addDecorator(withProvider)
}
