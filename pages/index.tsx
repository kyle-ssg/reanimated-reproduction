import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast } from 'react-toastify'
import useLoggedInRedirect from 'common/hooks/useLoggedInRedirect'

const HomePage: NextPageWithLayout = () => {
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

export default HomePage
