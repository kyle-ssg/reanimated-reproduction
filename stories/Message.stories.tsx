import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../styles/Global.scss'
import Message, { ErrorMessage, SuccessMessage } from '../components/Messages'

export default {
  title: 'Message',
  component: React.Component,
}

export const Default: ComponentStory<typeof React.Component> = (args) => (
  <>
    <Message {...args} />
    <SuccessMessage {...args} />
    <ErrorMessage {...args} />
  </>
)

Default.args = {
  children: 'Message',
}
