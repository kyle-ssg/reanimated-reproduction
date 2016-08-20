import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render () {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <a className="navbar-brand" href="#">
            SSG Boilerplate <ION name="ios-bonfire"/>
          </a>
        </nav>

        <div className="app-container container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
