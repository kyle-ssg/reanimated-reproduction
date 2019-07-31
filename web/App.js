import React, { Component } from 'react';

class App extends Component {
  static propTypes = {
      children: propTypes.element.isRequired,
  };

  static contextTypes = {
      router: propTypes.object.isRequired,
  };

  onLogin = () => {

  };

  onLogout = () => {
      this.context.router.replace('/');
  };

  render() {
      return (
          <div>
              <nav className="navbar navbar-fixed-top navbar-light">
                  <ul className="nav justify-content-start">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">
                            Base Layout
                          </Link>
                      </li>
                      {/* Examples */}
                      <React.Fragment>
                          <li className="nav-item">
                              <Link to="/example/sass" className="nav-link">
                       Sass
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/example/layout" className="nav-link">
                       Layout
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/example/components" className="nav-link">
                       Components
                              </Link>
                          </li>
                      </React.Fragment>
                      {/* End of Examples */}
                  </ul>
                  <ul className="nav justify-content-end">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">
                              Login
                          </Link>
                      </li>
                  </ul>
              </nav>
              {this.props.children}
          </div>
      );
  }
}

App.propTypes = {
};

export default hot(module)(App);