import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast } from 'react-toastify'
import useLoggedInRedirect from 'common/hooks/useLoggedInRedirect'
import { ServerSidePageProps } from '../types/serversidePageProps'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  useLoggedInRedirect()
  return (
    <div className='container'>
      <div>
        <ButtonPrimary onClick={() => toast(<div>Hi</div>, { type: 'info' })}>
          Click me!
        </ButtonPrimary>
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (store) => async (): Promise<ServerSidePageProps<HomePageType>> => {
    return {
      props: {},
    }
  },
)

export default HomePage
