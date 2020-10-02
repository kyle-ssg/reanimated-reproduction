import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ArticlePage = () => {
  
  const { query: { id } } = useRouter();

  useEffect(() => {
    API.trackPage("ArticlePage")
  }, [])

  return <div className="container">Article {id}</div>
};

ArticlePage.displayName = "ArticlePage";
// Do server rendered actions such as fetching data here
// ArticlePage.getInitialProps = async({ Component, ctx,  }) => { await ctx.store.dispatch(AppActions.getArticle(ctx.query.id)) };

export default ArticlePage;
