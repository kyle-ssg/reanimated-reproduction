import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import 'project/polyfill'
import SharedComponent from 'common/components/SharedComponent'
import BreakpointProvider from '../../mobile/app/components/base/BreakpointProvider'
export default {
  title: 'shared/SharedComponent',
  component: SharedComponent,
}

export const Default: ComponentStory<typeof SharedComponent> = (args) => {
  return (
    <BreakpointProvider>
      <SharedComponent />
    </BreakpointProvider>
  )
}

Default.args = {}
