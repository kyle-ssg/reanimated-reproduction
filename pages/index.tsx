import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/base/forms/Button'
import { useAuth } from '../common/providers/useAuth'
import 'project/polyfill'
import SharedComponent from '../common/components/SharedComponent'

const HomePage = () => {
  const router = useRouter()
  const { user } = useAuth()
  useEffect(() => {
    if (user) {
      API.loginRedirect()
    }
  }, [user])

  return (
    <div className='container'>
      <div>
        <ButtonPrimary>Click me!</ButtonPrimary>
        <Loader />
        <p>Good morning</p>
      </div>

      <div>
        <SharedComponent />
      </div>
    </div>
  )
}

HomePage.displayName = 'HomePage'
// Do server rendered actions such as fetching data here
// HomePage.getInitialProps = async({ Component, ctx }) => {};
HomePage.getLayout = ({ page, router }) => {
  return <>{page}</>
}
export default HomePage
