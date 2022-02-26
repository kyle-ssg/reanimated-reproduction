import { NextPageWithLayout } from 'types/nextPageWithLayout'
import useLoggedInRedirect from 'common/hooks/useLoggedInRedirect'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  useLoggedInRedirect()

  return (
    <div className='container'>
      <div>
        <p>Hello world</p>
      </div>
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
