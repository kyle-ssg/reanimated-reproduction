// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import '../project/api';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const locale = API.getStoredLocale(ctx.req);
        return { ...initialProps, locale };
    }


    render() {
        return (
            <html lang={this.props.locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
                    <script> </script>
                </body>
            </html>
        );
    }
}

export default MyDocument;
