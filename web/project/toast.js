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
          'show': !this.props.isRemoving,
          'removing out': this.props.isRemoving,
      });

      return (
          <div className={className}>
              {/* eslint-disable-next-line */}
        <div className="row">
            <div className="col-2">
                <button onClick={this.props.remove} className="btn--nostyle pull-xs-right" type="button">
                    <span className="icon ion-md-close" />
                </button>
            </div>
            <div className="col-10">
                {this.props.children}
            </div>
        </div>
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
