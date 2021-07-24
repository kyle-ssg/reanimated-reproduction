// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js

import '../project/polyfill'
import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import '../project/api'

class MyDocument extends Document<{ locale: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = API.getStoredLocale(ctx.req)
    return { ...initialProps, locale }
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          {/*<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Raleway:100'/>*/}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='SiteAssist' />
          <meta name='theme-color' content='#317EFB' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link rel='apple-touch-icon' href='/images/icons-192.png' />
          <link rel='icon' sizes='192x192' href='/images/icons-192.png' />
          <link rel='shortcut icon' href='/images/favicon.ico' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/images/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/images/favicon-16x16.png'
          />
          <meta property='og:title' content='SiteAssist' />
          {/*<meta property="og:type" content="video.movie" />*/}
          {/*<meta*/}
          {/*  property="og:url"*/}
          {/*  content="http://www.imdb.com/title/tt0117500/"*/}
          {/*/>*/}
          {/*<meta*/}
          {/*  property="og:image"*/}
          {/*  content="http://ia.media-imdb.com/images/rock.jpg"*/}
          {/*/>*/}
          {/*See https://www.google.com/recaptcha/admin*/}
          {/*<script src="https://www.google.com/recaptcha/api.js" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
