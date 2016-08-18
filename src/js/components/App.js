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
          <a className="navbar-brand" href="#">SSG Boilerplate</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
            &#9776;
          </button>
          <div className="collapse" id="exCollapsingNavbar">
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link to='/'>Back To Home View</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Flexy fun</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Trash</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">More trash</a>
                </li>
              </ul>

          </div>
        </nav>

        <div className="app-container container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
