import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import '../project/polyfill';
import createStore from '../common/store';
import Header from '../components/Header';

let initialRender = false;

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps;
        if (ctx.pathname === '/_error') {
            return;
        }
        //
        if (!ctx.pathname) {
            return;
        }
        const locale = Constants.simulate.FORCE_LANGUAGE || API.getStoredLocale(ctx.req); // Retrieve the locale from cookie or headers
        await ctx.store.dispatch(AppActions.startup({locale})); // Post startup action with token and locale
        if (Component.getInitialProps) { // Wait for pages to complete any async getInitialProps
            pageProps = await Component.getInitialProps({ctx});
        }
        return {pageProps};
    }

    constructor(props) {
        super(props);
        if ((typeof window !== 'undefined') && !this.props.store.getState().clientLoaded) {
            const token = API.getStoredToken(); // Retrieve token cookie from req.headers
            const user = API.getStoredUser(); // Retrieve token cookie from req.headers
            const refreshToken = API.getStoredRefreshToken(); // Retrieve token cookie from req.headers
            this.props.store.dispatch(AppActions.startup({token, user, refreshToken, clientLoaded: true}, {
                onSuccess: () => {

                },
            })); // Post startup action with token and locale
        }
    }

    render() {
        const {Component, pageProps, store} = this.props;

        if (!initialRender) { // Ensure we set the locale before rendering anything
            initialRender = true;
            const locale = store.getState().locale;
            if (locale) {
                Strings.setLanguage(locale);
            }
        }

        return (
            <Container>
                <Provider store={store}>
                    <React.Fragment>
                        <Head>
                            <meta charSet="utf-8"/>
                            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                            <meta name="description" content="The project description"/>
                            <meta name="theme-color" content="#317EFB"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                            <link rel="apple-touch-icon" href="/static/images/icons-192.png"/>
                            <link rel="icon" sizes="192x192" href="/static/images/icons-192.png"/>
                            <link rel="manifest" href="/static/manifest.json"/>
                            <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                            <link
                              rel="icon" type="image/png" sizes="32x32"
                              href="/static/images/favicon-32x32.png"
                            />
                            <link
                              rel="icon" type="image/png" sizes="16x16"
                              href="/static/images/favicon-16x16.png"
                            />
                            <meta property="og:title" content="The Rock" />
                            <meta property="og:type" content="video.movie" />
                            <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
                            <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
                            <title>The Project</title>
                        </Head>
                        <Header/>
                        <Component {...pageProps} />
                        <div id="confirm"/>
                        <div id="alert"/>
                        {
                            E2E && (
                                <React.Fragment>
                                    <div className="e2e" id="e2e-request" />
                                    <div className="e2e" id="e2e-error" />
                                </React.Fragment>
                            )
                        }
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
