import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

class Toggle extends PureComponent {
  static displayName = 'Toggle'

  static propTypes = {
    onChange: propTypes.func,
    toggled: propTypes.bool,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node,
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {
      toggled: !!props.toggled,
    };
  }

  handleClick = () => {
    this.setState({ toggled: !this.state.toggled });
    this.props.onChange && this.props.onChange(!this.state.toggled);
  }

  render() {
    return (
        <button
          className={`btn toggle-control d-flex justify-content-center align-items-center ${this.state.toggled ? 'selected' : ''}`}
          onClick={this.handleClick}
          type="button"
        >
            {this.props.children}
        </button>
    );
  }
}

export default Toggle;
