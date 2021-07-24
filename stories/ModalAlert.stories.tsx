import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../styles/Global.scss'
import ModalAlert from "../components/ModalAlert";

export default {
  title: 'Modal Alert',
  component: ModalAlert,
}

export const Default: ComponentStory<typeof Confirm> = (args) => {
  return (
    <>
      <ModalAlert isOpen title='Alert'>
        Test
      </ModalAlert>
    </>
  )
}
