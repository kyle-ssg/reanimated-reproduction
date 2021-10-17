import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../styles/Global.scss'
import Button, {
  ButtonPrimary,
  ButtonTertiary,
} from '../components/base/forms/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Primary: ComponentStory<typeof ButtonPrimary> = (args) => (
  <ButtonPrimary {...args}>Hi</ButtonPrimary>
)

export const Secondary: ComponentStory<typeof ButtonSecondary> = (args) => (
  <ButtonSecondary {...args}>Hi</ButtonSecondary>
)

export const Tertiary: ComponentStory<typeof ButtonTertiary> = (args) => (
  <ButtonTertiary {...args}>Hi</ButtonTertiary>
)
