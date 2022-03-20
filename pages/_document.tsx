// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js

import 'project/polyfill'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { API } from 'project/api'

class MyDocument extends Document {
  static async getStaticProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = API.getStoredLocale(ctx.locale)
    return { ...initialProps, locale }
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap'
            rel='stylesheet'
          />
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
