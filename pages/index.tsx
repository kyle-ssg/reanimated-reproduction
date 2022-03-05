import React from 'react'
import 'project/polyfill'
import { toast, ToastContainer } from 'react-toastify'
import { ButtonPrimary } from 'components/base/forms/Button'
import { NextPageWithLayout } from '../types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import Nav from 'components/Nav'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  return (
    <>
      <main className='container'>
        <div className='bg-light p-5 rounded'>
          <h1>Toast example</h1>
          <p className='lead'>The button below will show a toast message.</p>
          <ButtonPrimary
            className='btn-lg'
            onClick={() => toast(<div>Hi</div>, { type: 'info' })}
          >
            Click me!
          </ButtonPrimary>
        </div>
        <ToastContainer />
      </main>
    </>
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
