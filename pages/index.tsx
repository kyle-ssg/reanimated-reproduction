import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../common/providers/useAuth'
import 'project/polyfill'
import SharedComponent from '../common/components/SharedComponent'
import { toast } from 'react-toastify'
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
        <ButtonPrimary onClick={() => toast(<div>Hi</div>, { type: 'info' })}>
          Click me!
        </ButtonPrimary>
        <Loader />
        <p>Good morning</p>
      </div>

      <div></div>
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
