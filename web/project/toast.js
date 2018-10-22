import cn from 'classnames';

const Message = class extends React.Component {
  static displayName = 'Message';

  componentDidMount() {
    setTimeout(this.props.remove, this.props.expiry);
  }

  render() {
    const className = cn({
      'toast-message': true,
      'alert alert-warning fade': true,
      show: !this.props.isRemoving,
      'removing out': this.props.isRemoving,
    });

    return (
      <div className={className}>
        {/* eslint-disable-next-line */}
        <a onClick={this.props.remove} className="pull-xs-right">
          <ion className="icon ion-md-close" />
        </a>
        {this.props.children}
      </div>
    );
  }
};

Message.defaultProps = {
  expiry: 5000,
};

Message.propTypes = {
  children: propTypes.node,
  expiry: propTypes.number,
  content: propTypes.node,
  remove: propTypes.func,
  isRemoving: propTypes.bool,
};

module.exports = Message;

const Toast = class extends React.Component {
  static displayName = 'ToastMessages';

  constructor(props, context) {
    super(props, context);
    this.state = { messages: [] };
    window.toast = this.toast;
  }

  toast = (content, expiry) => {
    const { messages } = this.state;


    const id = Utils.GUID();
    messages.unshift({ content, expiry, id });
    this.setState({ messages });
  }

  remove = (id) => {
    const index = _.findIndex(this.state.messages, { id });
    const messages = this.state.messages;

    if (index > -1) {
      messages[index].isRemoving = true;
      setTimeout(() => {
        const newIndex = _.findIndex(this.state.messages, { id });
        // eslint-disable-next-line
        const newMessages = this.state.messages;
        newMessages.splice(newIndex, 1);
        this.setState({ messages: newMessages });
      }, 500);
      this.setState({ messages });
    }
  }

  render() {
    return (
      <div className="toast-messages">
        {this.state.messages.map(message => (
          <Message
            key={message.id}
            isRemoving={message.isRemoving}
            remove={() => this.remove(message.id)}
            expiry={message.expiry}
          >
            {message.content}
          </Message>
        ))}
      </div>
    );
  }
};

module.exports = Toast;
