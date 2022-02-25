import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast } from 'react-toastify'
import useLoggedInRedirect from 'common/providers/useLoggedInRedirect'
import {
  useCreateTodoMutation,
  useGetTodoQuery,
} from '../common/services/defaultService'
import { useEffect } from 'react'

const HomePage: NextPageWithLayout = () => {
  useLoggedInRedirect()
  const { data } = useGetTodoQuery({ id: 2 }, {})
  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation()
  const submit = () => {
    createTodo({
      'userId': 1,
      'title': 'rest',
      'completed': true,
    })
  }
  useEffect(() => {
    if (isSuccess) {
      toast('Saved')
    }
  }, [isSuccess])
  return (
    <div className='container'>
      <div>
        <ButtonPrimary onClick={submit}>Click me!</ButtonPrimary>
        {JSON.stringify(data)}
        <p>Hello world</p>
      </div>
    </div>
  )
}

HomePage.getLayout = (page) => {
  return <>{page}</>
}

export default HomePage
