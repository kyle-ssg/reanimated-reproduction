import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Tabs from 'components/base/forms/Tabs'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast, Toast } from 'components/toast'

export default {
  title: 'Toast/Toast',
  component: Tabs,
}

export const Default: ComponentStory<typeof Tabs> = () => {
  return (
    <>
      <ButtonPrimary
        onClick={() => toast(<div>Title</div>, <div>Content</div>)}
      >
        Open Toast
      </ButtonPrimary>
      <Toast />
      <div id='toast' />
    </>
  )
}
