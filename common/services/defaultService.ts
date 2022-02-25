import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './util/baseQuery'
import extractRehydrationInfo from './util/extractRehydrationInfo'
import { Res } from './responses'
import { Req } from './requests'

export const defaultService = createApi({
  reducerPath: 'default',
  baseQuery,
  refetchOnFocus: true,
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodo: builder.query<Res['todo'], Req['getTodo']>({
      query: (query: Req['getTodo']) => ({ url: `todos/${query.id}` }),
      providesTags: (r) => [{ type: 'Todo', id: r?.id }], // adds cache to Todo/id
    }),
    createTodo: builder.mutation<Res['todo'], Req['createTodo']>({
      query: (query: Req['createTodo']) => ({
        url: `todos`,
        method: 'POST',
        body: query,
      }),
    }),
    updateTodo: builder.mutation<Res['todo'], Req['updateTodo']>({
      query: (query: Req['updateTodo']) => ({
        url: `todos/${query.id}`,
        method: 'PUT',
        body: query,
      }),
      invalidatesTags: (x) => [{ type: 'Todo', id: x?.id }], // triggers getTodo(id)
    }),
    // END OF ENDPOINTS
  }),
  extractRehydrationInfo,
})

export const {
  useGetTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  // END OF API_EXPORTS
} = defaultService

// const { data, isLoading } = useGetTodoQuery({ id: 2 }, {})
// const [createTodo, { isLoading, data: createResponse, isSuccess }] = useCreateTodoMutation()
