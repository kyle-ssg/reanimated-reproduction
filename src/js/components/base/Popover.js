import FocusMonitor from './higher-order/FocusMonitor';

const Popover = class extends React.Component {
  displayName: 'Popover'

  constructor (props, context) {
    super(props, context);
    this.state = { isActive: false };
  }

  _focusChanged = (isActive)=>this.setState({ isActive });

  render () {
    var classNames = cn({
      popover: true,
      in: this.state.isActive
    }, this.props.className);

    return (
      <FocusMonitor
        onFocusChanged={this._focusChanged}
        isHover={true}>
        <div className={this.props.className}>
          {this.props.renderTitle(this.state.isActive)}
          <div className="relative">
            <div className={classNames}>
              {this.props.children}
            </div>
          </div>
        </div>
      </FocusMonitor>
    );
  }
};

Popover.propTypes = {
  renderTitle: RequiredFunc,
  children: OptionalElement
};

module.exports = Popover;
