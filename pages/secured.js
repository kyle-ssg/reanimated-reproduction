import React, { Component } from 'react';
import { withRouter } from 'next/router';
import withAuth from '../common/providers/withAuth';
import withUserRedirect from '../components/withUserRedirect';

class SecuredPage extends Component {
  static displayName = 'SecuredPage';

  render() {
    return <div className="container-fluid">Secret page</div>;
  }
}

export default withRouter(withAuth(withUserRedirect(SecuredPage)));
