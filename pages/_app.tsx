import 'project/polyfill'
import { AppProps } from 'next/app'
import '../styles/Global.scss'
import LanguageHandler from 'common/components/LanguageHandler'
import { NextPageWithLayout } from 'types/nextPageWithLayout'
import NProgress from 'components/util/NProgress'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { startupActions } from '../common/hooks/useStartup'
import { Constants } from '../common/utils'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

type ComponentType = AppPropsWithLayout

const AppComponent: FC<ComponentType> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  if (router.asPath.includes('sw.js')) {
    return null
  }
  return (
    <LanguageHandler defaultLocale={router.locale || Constants.defaultLocale}>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
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

// @ts-ignore
AppComponent.getInitialProps = nextReduxWrapper.getStaticProps(
  (store) => async (ctx) => {
    try {
      await store.dispatch(
        startupActions.startup({
          locale: ctx.locale || Constants.defaultLocale,
        }),
      )
    } catch (e) {
      console.error(e)
    }
    return {
      props: {},
    }
  },
)

export default nextReduxWrapper.withRedux(AppComponent)
