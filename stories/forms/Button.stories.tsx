import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Button, {
  ButtonPrimary,
  ButtonTertiary,
} from 'components/base/forms/Button'

export default {
  title: 'forms/Button',
  component: Button,
}

export const Primary: ComponentStory<typeof ButtonPrimary> = (args) => (
  <>
    <div className='main pt-5 pb-5 pl-5'>
      <ButtonPrimary {...args}>
        Button <i className='fas fa-arrow-right ml-1' />
      </ButtonPrimary>
    </div>
  </>
)

export const Secondary: ComponentStory<typeof ButtonSecondary> = (args) => (
  <div className='main pt-5 pb-5 pl-5'>
    <ButtonSecondary {...args}>
      Login <i className='fas fa-user ml-1 text-brand-primary'></i>
    </ButtonSecondary>
  </div>
)

Primary.args = {
  disabled: false,
}

Secondary.args = {
  disabled: false,
}

// export const Tertiary: ComponentStory<typeof ButtonTertiary> = (args) => (
//   <ButtonTertiary {...args}>Hi</ButtonTertiary>
// )
