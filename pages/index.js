import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Button from '../components/base/forms/Button';

class HomePage extends Component {
  static displayName = 'HomePage';

  componentDidMount() {
      API.trackPage('HomePage');
  }

  // Do server rendered actions such as fetching data here
  // static async getInitialProps({ Component, ctx }) {
  // }

  render() {
      return (
          <div className="container">
              Home Page
              <Button>
                  Hi
              </Button>
          </div>
      );
  }
}

export default withRouter(HomePage);
