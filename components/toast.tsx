import cn from 'classnames'
import { Utils } from '../common/utils'
import { Component, ReactNode } from 'react'
import Flex from 'components/base/grid/Flex'

const Message = class extends Component<
  {
    title: ReactNode
    className?: string
    isRemoving?: boolean
    remove: () => void
    expiry: number
  },
  { isShowing: boolean }
> {
  static displayName = 'Message'

  constructor(props: any) {
    super(props)
    this.state = {
      isShowing: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShowing: true })
      this.props.remove()
    }, this.props.expiry)
    setTimeout(() => {
      this.setState({ isShowing: false })
    }, 10)
  }

  render() {
    const className = cn(
      {
        'toast': true,
        'fade': true,
        showing: this.state.isShowing,
        show: true,
        'hide': this.props.isRemoving,
      },
      this.props.className,
    )

    return (
      <div className={className}>
        {/* eslint-disable-next-line */}
        <div className="toast-header">
          <Flex>{this.props.title}</Flex>
          <button
            onClick={this.props.remove}
            type='button'
            className='btn-close'
            data-bs-dismiss='toast'
            aria-label='Close'
          ></button>
        </div>
        <div className='toast-body'>{this.props.children}</div>
      </div>
    )
  }
}

export let toast: (
  title: ReactNode,
  content: ReactNode,
  className?: string,
  expiry?: number,
) => void

export const Toast = class extends Component<
  {},
  {
    messages: {
      id: string
      title: ReactNode
      className?: string
      content: ReactNode
      isRemoving?: boolean
      expiry: number
    }[]
  }
> {
  static displayName = 'ToastMessages'

  constructor(props: any, context: any) {
    super(props, context)
    this.state = { messages: [] }
    toast = this.toast
  }

  toast = (
    title: ReactNode,
    content: ReactNode,
    className?: string,
    expiry = 5000,
  ) => {
    const { messages } = this.state

    const id = Utils.GUID()
    messages.push({ content, title, expiry, className, id })
    this.setState({ messages })
  }

  remove = (id: string) => {
    const index = this.state.messages.findIndex((v) => v.id === id)
    const messages = this.state.messages

    if (index > -1) {
      messages[index].isRemoving = true
      setTimeout(() => {
        const newIndex = this.state.messages.findIndex((v) => v.id === id)
        // eslint-disable-next-line
        const newMessages = this.state.messages;
        newMessages.splice(newIndex, 1)
        this.setState({ messages: newMessages })
      }, 500)
      this.setState({ messages })
    }
  }

  render() {
    return (
      <div className='toast-messages toast-container position-fixed bottom-0 end-0 m-4'>
        {this.state.messages.map((message) => (
          <Message
            key={message.id}
            title={message.title}
            className={message.className}
            isRemoving={message.isRemoving}
            remove={() => this.remove(message.id)}
            expiry={message.expiry}
          >
            {message.content}
          </Message>
        ))}
      </div>
    )
  }
}
