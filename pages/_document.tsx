// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from "react";
import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import "../project/api";

class MyDocument extends Document<{ locale:string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = API.getStoredLocale(ctx.req);
    return { ...initialProps, locale };
  }

  render() {
    return (
        <Html lang={this.props.locale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
  }
}

export default MyDocument;
