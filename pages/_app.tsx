import { API } from 'project/api'
import 'project/polyfill'
import App, { AppInitialProps, AppProps } from 'next/app'
import '../styles/Global.scss'
import LanguageHandler from 'common/components/LanguageHandler'
import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import NProgress from 'components/util/NProgress'
import Strings from 'project/localisation'
// import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import { startupActions } from '../common/hooks/useStartup'
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
Strings.setLanguage(API.getStoredLocale(''))

//@ts-ignore
class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = nextReduxWrapper.getStaticProps(
    (store) => async (ctx) => {
      try {
        const locale = API.getStoredLocale(ctx.locale)
        if (!store.getState().startup?.locale) {
          Strings.setLanguage(locale)
          await store.dispatch(startupActions.startup)
        }
      } catch (e) {
        console.error(e)
      }
      return {
        props: {},
      }
    },
  )
  constructor(props: any) {
    super(props)
  }
  public render() {
    const { Component, pageProps }: AppPropsWithLayout = this.props
    const getLayout = Component.getLayout || ((page) => page)
    return (
      <LanguageHandler>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          {/*<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Raleway:100'/>*/}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='TheApp' />
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
          <meta property='og:title' content='TheProject' />
        </Head>
        <NProgress />
        {getLayout(<Component {...pageProps} />, pageProps)}
        <div id='modal' />
        <div id='confirm' />
        <div id='alert' />
      </LanguageHandler>
    )
  }
}

export default nextReduxWrapper.withRedux(WrappedApp)
