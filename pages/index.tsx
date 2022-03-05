import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import { useUser } from 'common/hooks/useUser'
import { useEffect } from 'react'
import Button from 'components/base/forms/Button'
import { toast, ToastContainer } from 'react-toastify'
import Strings from 'project/localisation'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  // useLoggedInRedirect()
  const { login, loginSuccess, userError } = useUser()
  useEffect(() => {
    if (loginSuccess) {
      toast('')
    }
  }, [loginSuccess])
  useEffect(() => {
    if (userError) {
      toast('')
    }
  }, [userError])
  return (
    <div className='container'>
      <div>
        <p>{Strings.hello}</p>
        <Button onClick={() => login({})}>{Strings.login}</Button>
      </div>
      <ToastContainer />
    </div>
  )
}

HomePage.getLayout = (page) => {
  return <>{page}</>
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
