import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast, ToastContainer, ToastMessage } from 'components/toast'
import { useState } from 'react'

export default {
  title: 'Toast/Toast',
  component: ToastMessage,
}

export const Default: ComponentStory<typeof ToastMessage> = () => {
  return (
    <>
      <ButtonPrimary
        onClick={() => toast(<div>Title</div>, <div>Content</div>)}
      >
        Open Toast
      </ButtonPrimary>
      <ToastContainer />
    </>
  )
}
export const Static: ComponentStory<typeof ToastMessage> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [useFade, setUseFade] = useState<boolean>(false)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={useFade}
          remove={() => {
            setIsActive(false)
            setUseFade(true)
          }}
          title={<div>Title</div>}
        >
          Content
        </ToastMessage>
      ) : (
        <ButtonPrimary onClick={() => setIsActive(true)}>
          Show Toast
        </ButtonPrimary>
      )}
    </>
  )
}
export const NoClose: ComponentStory<typeof ToastMessage> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [useFade, setUseFade] = useState<boolean>(false)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={useFade}
          hideClose
          remove={() => {
            setIsActive(false)
            setUseFade(true)
          }}
          title={<div>Title</div>}
          {...args}
        >
          Content
        </ToastMessage>
      ) : (
        <ButtonPrimary onClick={() => setIsActive(true)}>
          Show Toast
        </ButtonPrimary>
      )}
    </>
  )
}
NoClose.args = {
  hideClose: true,
}

export const AutoHide: ComponentStory<typeof ToastMessage> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(true)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={true}
          expiry={5000}
          remove={() => {
            setIsActive(false)
          }}
          title={<div>Title</div>}
          {...args}
        >
          Content
        </ToastMessage>
      ) : (
        <ButtonPrimary onClick={() => setIsActive(true)}>
          Show Toast
        </ButtonPrimary>
      )}
    </>
  )
}

AutoHide.args = {
  expiry: 5000,
}
