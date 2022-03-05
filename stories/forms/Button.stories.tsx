import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Button, {
  ButtonDanger,
  ButtonOutlinePrimary,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
} from 'components/base/forms/Button'

export default {
  title: 'forms/Button',
  component: Button,
}

export const Primary: ComponentStory<typeof ButtonPrimary> = (args) => (
  <ButtonPrimary icon='fas fa-arrow-right' {...args}>
    Button
  </ButtonPrimary>
)

export const Secondary: ComponentStory<typeof ButtonSecondary> = (args) => (
  <ButtonSecondary icon='fas fa-user text-brand-primary' {...args}>
    Login
  </ButtonSecondary>
)

export const All: ComponentStory<typeof ButtonPrimary> = (args) => (
  <>
    <ButtonPrimary icon='fas fa-arrow-right' className='mb-3 d-block' {...args}>
      Button
    </ButtonPrimary>

    <ButtonOutlinePrimary className='mb-3 d-block' {...args}>
      Outline Primary
    </ButtonOutlinePrimary>

    <ButtonSecondary icon='fas fa-arrow-right' className='mb-3' {...args}>
      Button
    </ButtonSecondary>

    <ButtonDanger className='d-block mb-3' {...args}>
      Danger
    </ButtonDanger>

    <ButtonText className='d-block mb-3' {...args}>
      Link
    </ButtonText>
  </>
)

export const Sizes: ComponentStory<typeof ButtonPrimary> = (args) => (
  <>
    <ButtonPrimary
      icon='fas fa-arrow-right'
      className='btn-lg mb-3 d-block'
      {...args}
    >
      Button
    </ButtonPrimary>

    <ButtonPrimary icon='fas fa-arrow-right' className='mb-3 d-block' {...args}>
      Button
    </ButtonPrimary>

    <ButtonPrimary
      icon='fas fa-arrow-right'
      className='btn-sm d-block'
      {...args}
    >
      Button
    </ButtonPrimary>
  </>
)

Primary.args = {
  disabled: false,
}

Secondary.args = {
  disabled: false,
}

Sizes.args = {
  disabled: false,
}
