import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './util/baseQuery'
import extractRehydrationInfo from './util/extractRehydrationInfo'
import { Responses } from './responses'
import { Requests } from './requests'

export const defaultService = createApi({
  reducerPath: 'default',
  baseQuery,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getTodo: builder.query<Responses['todo'], Requests['getTodo']>({
      query: (query: Requests['getTodo']) => ({ url: `todos/${query.id}` }),
    }),
    createTodo: builder.mutation<Responses['todo'], Requests['createTodo']>({
      query: (query: Requests['createTodo']) => ({
        url: `todos`,
        method: 'POST',
        body: query,
      }),
    }),
    // END OF ENDPOINTS
  }),
  extractRehydrationInfo,
})

export const {
  useGetTodoQuery,
  useCreateTodoMutation,
  // END OF API_EXPORTS
} = defaultService
