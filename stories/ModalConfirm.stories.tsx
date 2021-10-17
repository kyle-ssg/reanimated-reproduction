import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../styles/Global.scss'
import Confirm from '../components/ModalConfirm'

export default {
  title: 'Modal Confirm',
  component: Confirm,
}

export const Default: ComponentStory<typeof Confirm> = (args) => {
  return (
    <>
      {/*// @ts-ignore*/}
      <React.Fragment>
        <div id='modal' />
        <div id='confirm' />
        <div id='alert' />
        <div id='toast' />
      </React.Fragment>
      <Confirm isOpen title='Confirm this thing'>
        Test
      </Confirm>
    </>
  )
}
