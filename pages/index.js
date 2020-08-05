import React, { Component } from 'react';
import { withRouter } from 'next/router';
import propTypes from 'prop-types';

import withAuth from 'common/providers/withAuth';
import Button from '../components/base/forms/Button';

class HomePage extends Component {
  static displayName = 'HomePage';

  static propTypes = {
    user: propTypes.object,
  };

  componentDidMount() {
    API.trackPage('HomePage');

    if (this.props.user) {
      API.loginRedirect();
    }
  }

  // Do server rendered actions such as fetching data here
  // static async getInitialProps({ Component, ctx }) {
  // }

  render() {
    return (
        <div className="container">
            Home Page
            <Button>Hi</Button>
        </div>
    );
  }
}

export default withRouter(withAuth(HomePage));
