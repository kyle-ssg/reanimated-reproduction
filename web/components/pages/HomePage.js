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
          Hello World
      </div>
  )
});
