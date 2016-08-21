//Provides a simple way to track when you click outside of parent component
//Useful for autocompletes / popovers etc
import React from 'react';
import ReactDOM from 'react-dom';

const FocusMonitor = class extends React.Component {
  displayName: 'FocusMonitor'

  constructor (props, context) {
    super(props, context);
    this.state = { hasFocus: false };
  }

  focusChanged = (hasFocus) => {
    if (hasFocus !== this.state.hasFocus) {
      this.setState({
        hasFocus
      });
      this.props.onFocusChanged(hasFocus);
    }
  }

  _clickDocument = (e) => {
    var component = ReactDOM.findDOMNode(this);
    if (e.target == component || $(component).has(e.target).length) {
      this.focusChanged(true);
    } else {
      this.focusChanged(false);
    }
  }

  componentDidMount () {
    var node = ReactDOM.findDOMNode(this);
    if (this.props.isHover) {
      node.addEventListener('mouseover', (e)=>this.focusChanged(true), false);
      node.addEventListener('mouseleave', (e)=>this.focusChanged(false), false);
    } else {
      window.addEventListener('mousedown', this._clickDocument, false);
    }
  }

  componentWillUnmount () {
    var node = ReactDOM.findDOMNode(this);
    if (this.props.isHover) {
      node.removeEventListener('mouseover', ()=>this.focusChanged(true), false);
      node.removeEventListener('mouseleave', ()=>this.focusChanged(false), false);
    } else {
      window.removeEventListener('mousedown', this._clickDocument, false);
    }
  }

  render () {
    return this.props.children;
  }
};

FocusMonitor.propTypes = {
  onFocusChanged: React.PropTypes.RequiredFunc,
  children: React.PropTypes.RequiredElement
};

module.exports = FocusMonitor;
