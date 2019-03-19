import React from 'react';

export default hot(module)(class extends React.Component {
  static contextTypes = {
      router: propTypes.object.isRequired,
  };

  static displayName = 'HomePage';

  componentDidMount() {
      API.trackPage(Constants.pages.HOME_PAGE);
  }

  render = () => (
      <div className="app-container container">
          <AccountProvider onLogout={this.onLogout} onLogin={this.onLogin}>
              {() => (
                  <div>
                      <div className="hero">
                          <h1 className="hero__title">Hero text</h1>
                          <img alt="hero" src="https://placehold.it/900x400" className="hero__image img-fluid"/>
                          <div className="hero__text">
                              <p className="hero__text__intro">Hero text intro</p>
                              <p className="hero__text__body">Hero text body</p>
                          </div>
                      </div>
                      <div className="hero hero--blue">
                          <h1 className="hero__title">Hero text</h1>
                          <img alt="hero" src="https://placehold.it/900x400" className="hero__image img-fluid"/>
                          <div className="hero__text">
                              <p className="hero__text__intro">Hero text intro</p>
                              <p className="hero__text__body">Hero text body</p>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col">
                              <div className="panel">
                                  <h3 className="panel__title">Panel 1 title</h3>
                                  <p className="panel__text">Panel 1 text</p>
                              </div>
                          </div>
                          <div className="col">
                              <div className="panel">
                                  <h3 className="panel__title">Panel 2 title</h3>
                                  <p className="panel__text">Panel 2 text</p>
                              </div>
                          </div>
                          <div className="col">
                              <div className="panel">
                                  <h3 className="panel__title">Panel 3 title</h3>
                                  <p className="panel__text">Panel 4 text</p>
                              </div>
                          </div>
                      </div>
                  </div>
              )}
          </AccountProvider>
      </div>
  )
});
