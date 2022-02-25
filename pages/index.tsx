import { NextPageWithLayout } from 'types/nextPageWithLayout'
import { ButtonPrimary } from 'components/base/forms/Button'
import { toast } from 'react-toastify'
import useLoggedInRedirect from 'common/hooks/useLoggedInRedirect'
import {
  useCreateTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from '../common/services/defaultService'
import { useEffect } from 'react'

const HomePage: NextPageWithLayout = () => {
  useLoggedInRedirect()
  const { data } = useGetTodoQuery({ id: 2 }, {})
  const [createTodo, { isLoading, data: createResponse, isSuccess }] =
    useCreateTodoMutation()
  const [
    updateTodo,
    {
      isLoading: updateLoading,
      isSuccess: updateSuccess,
      originalArgs: updateArgs,
    },
  ] = useUpdateTodoMutation()
  const submit = () => {
    createTodo({
      'userId': 1,
      'title': 'rest',
      'completed': true,
    })
  }
  const submitUpdate = () => {
    updateTodo({
      id: 2,
      'userId': 1,
      'title': 'rest',
      'completed': true,
    })
  }
  useEffect(() => {
    if (isSuccess) {
      toast(`Saved ${createResponse!.id}`)
    }
  }, [isSuccess, createResponse])
  useEffect(() => {
    if (updateSuccess) {
      toast(`Updated ${updateArgs!.id}`)
    }
  }, [updateSuccess, updateArgs])
  return (
    <div className='container'>
      <div>
        <ButtonPrimary disabled={isLoading} onClick={submit}>
          Click me!
        </ButtonPrimary>
        <ButtonPrimary disabled={updateLoading} onClick={submitUpdate}>
          Update
        </ButtonPrimary>
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
