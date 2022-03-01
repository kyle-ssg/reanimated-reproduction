import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import { useUser } from '../common/hooks/useUser'
import { useEffect } from 'react'
import Button from 'components/base/forms/Button'
import { toast, ToastContainer } from 'react-toastify'
import Strings from '../project/localisation'
import { useThing } from '../common/hooks/useThing'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  // useLoggedInRedirect()
  const { login, logout, user, loginSuccess, userError } = useUser()
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
  const { thing, setThing } = useThing()
  return (
    <div className='container'>
      <div>
        <p>{Strings.hello}</p>
        <Button onClick={() => setThing({ id: 'test' })}>
          {Strings.login}
        </Button>
        {thing?.id}
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
