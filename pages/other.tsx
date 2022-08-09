import React from 'react'
import 'project/polyfill'
import { NextPageWithLayout } from '../types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import Nav from 'components/Nav'
import SeoContainer from 'components/SeoContainer'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  return (
    <SeoContainer seoProps={{ title: 'Other page' }}>
      <main className='container'>Other Page</main>
    </SeoContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <>
      <Nav />
      {page}
    </>
  )
}

//serverside fetching
export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  () => async (): Promise<ServerSidePageProps<HomePageType>> => {
    return {
      props: {},
    }
  },
)

export default HomePage
