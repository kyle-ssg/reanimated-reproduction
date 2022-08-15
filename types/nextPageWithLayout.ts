import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { TNav } from '../common/cms-types'

export type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: ReactElement, pageProps: T, navLinks: TNav) => ReactNode
  getAnalyticsProperties?: () => Promise<Record<string, string>>
}
