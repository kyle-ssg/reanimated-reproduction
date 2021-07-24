import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../styles/Global.scss'
import Loader from '../components/Loader'
import { Provider } from 'react-redux'
import { createStore } from '../common/store'
import { PersistGate } from "redux-persist/integration/react";
import { Modal } from "reactstrap";

export default {
  title: 'Moddsadsals',
  component: Loader,
}

export const Default: ComponentStory<typeof Loader> = (args) => {
  const new_elem = document.createElement('div')
  new_elem.id = 'modal'
  document.body.append(new_elem)

  return (
    <>
      {/*// @ts-ignore*/}
        <React.Fragment>
          <div id='modal' />
          <div id='confirm' />
          <div id='alert' />
          <div id='toast' />
        </React.Fragment>
        <Modal isOpen>

        </Modal>
      </>
  )
}
