import nProgress from 'nprogress'
import Router from 'next/router'
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())
import { FC } from 'react'

const NProgress: FC = () => {
  return <></>
}

export default NProgress
