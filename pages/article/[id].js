import React, { Component } from 'react';
import { withRouter } from 'next/router';

class ArticlePage extends Component {
  static displayName = 'ArticlePage';

  componentDidMount() {
    API.trackPage('ArticlePage');
  }

  // static async getInitialProps({ Component, ctx }) {
  //     // await ctx.store.dispatch(AppActions.getArticle(ctx.query.id)); // Post startup action with token and locale
  // }

  render() {
    const {
      props: {
        router: {
          query: { id },
        },
      },
    } = this;
    return <div className="container">Article {id}</div>;
  }
}

export default withRouter(ArticlePage);
