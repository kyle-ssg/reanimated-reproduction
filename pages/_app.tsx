import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux, { MakeStore } from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import "../project/polyfill";
import "../project/project-components";
import createStore from "../common/store";
import Header from "../components/Header";
import ReactDOM from "react-dom";
import Toast from "../components/toast";
import _data from "../common/utils/_data";
import "ionicons/dist/css/ionicons.css";
import "../styles/styles.scss";
import { Store } from "redux";
import { PersistGate } from 'redux-persist/integration/react';

let initialRender = false;

export async function getInitialProps({ Component, ctx }) {
  let pageProps;

  // todo: this shouldn't happen for static resources
  if (ctx.pathname === "/_error" || !ctx.pathname) {
    return;
  }

  // Only use this function if you are using SSR, then this will retrieve the users token and perform
  const locale =
    Constants.simulate.FORCE_LANGUAGE || API.getStoredLocale(ctx.req); // Retrieve the locale from cookie or headers
  const token = await API.getStoredToken(ctx.req); // Retrieve token cookie from req.headers
  await new Promise( (resolve,reject)=>{
    ctx.store.dispatch(AppActions.startup({ locale, token }, { onSuccess:resolve, onError:reject })); // Post startup action with token and locale
  })
  if (Component?.getInitialProps) {
    // Wait for pages to complete any async getInitialProps
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
}


class MyApp extends App<{ store: Store  }> {
  static getInitialProps = getInitialProps;

  constructor(props) {
    super(props);
    // If you are using SSR do not use this function, the token should already be retrieved by the server
    if (
      typeof window !== "undefined" &&
      !this.props.store.getState().clientLoaded
    ) {
      // If you are using a static site you will have to use this approach for setting the token, otherwise it's handled
      // const token = API.getStoredToken(); // Retrieve token cookie from browser cookies
      // const refreshToken = API.getStoredRefreshToken(); // Retrieve token cookie from browser cookies
      // this.props.store.dispatch(AppActions.startup({ token, refreshToken, clientLoaded: true }, {
      //     onSuccess: () => {
      //
      //     },
      // })); // Post startup action with token and locale
      //    otherwise just set the token
      _data.setToken(this.props.store.getState().token);
    }
  }

  componentDidMount() {
    // if (window?.document?.getElementById("toast")) {
    //   ReactDOM.render(<Toast />, document.getElementById("toast"));
    // }
  }

  onFirstRender = () => {
    const { store } = this.props;
    initialRender = true;
    const locale = store.getState().locale;
    if (locale) {
      Strings.setLanguage(locale);
    }
  };

  render() {
    const { Component, pageProps, store } = this.props;

    if (!initialRender) {
      // Ensure we set the locale before rendering anything
      this.onFirstRender();
    }
    // If you are not using SSR, you may wish to display a loader here until clientLoaded = true
    // if (!store.getState().clientLoaded) {
    //
    // }
    return (
        <Provider store={store}>
          {/*// @ts-ignore*/}
          <PersistGate persistor={store.__PERSISTOR} loading={null}>
            <React.Fragment>
                  <Header />
                   <Component {...pageProps} />
                  <div id="modal" />
                  <div id="confirm" />
                  <div id="alert" />
                  <div id="toast" />
                  {E2E && (
                  <React.Fragment>
                      <div className="e2e" id="e2e-request" />
                      <div className="e2e" id="e2e-error" />
                  </React.Fragment>
            )}
            </React.Fragment>
          </PersistGate>
        </Provider>
    );
  }
}

//
export default global.__JEST__ ? null : withRedux(createStore as unknown as MakeStore)(withReduxSaga(MyApp));
