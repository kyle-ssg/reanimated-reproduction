import nProgress from 'nprogress'
import Router from 'next/router'
import { FC } from 'react'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

const NProgress: FC = () => {
  return <></>
}

export default NProgress
