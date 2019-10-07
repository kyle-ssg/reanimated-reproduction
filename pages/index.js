import React, { Component } from 'react';
import { withRouter } from 'next/router';

class HomePage extends Component {
  static displayName = 'HomePage';

  componentDidMount() {
      API.trackPage('HomePage');
  }

  // Do server rendered actions such as fetching data here
  // static async getInitialProps({ Component, ctx }) {
  // }

  render()
  {
      return (
          <div className="container">
            Home Page
          </div>
      );
  }
}

export default withRouter(HomePage);
