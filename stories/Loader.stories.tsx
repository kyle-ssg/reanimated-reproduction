import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../styles/Global.scss'
import Loader from '../components/Loader'

export default {
  title: 'Loader',
  component: Loader,
}

export const Default: ComponentStory<typeof Loader> = (args) => <Loader />
