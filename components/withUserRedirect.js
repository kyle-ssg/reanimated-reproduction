import React, { Component } from 'react';
import { withRouter } from 'next/router';
import withAuth from '../common/providers/withAuth';
import Router from 'next/router';

const withUserRedirect = (WrappedComponent) => {
  class HOC extends Component {
    static displayName = 'withUserRedirect';

    constructor(props) {
      super(props);
      this.state = {};
      const user = this.props.user;
      if (!user && typeof window !== 'undefined') {
        const redirect = encodeURIComponent(this.props.router.route);
        const as = encodeURIComponent(this.props.router.asPath);
        let path = `/login?redirect=${redirect}`;
        if (redirect !== as) {
          path += `&as=${as}`;
        }
        this.props.router.replace(path);
        this.preventRender = true;
      }
    }

    render() {
      if (this.preventRender) {
        return null
      }
      return (
          <WrappedComponent
            {...this.props}
            {...this.state}
                />
      );
    }
  }

  return withRouter(withAuth(HOC));
};

export default withUserRedirect;
