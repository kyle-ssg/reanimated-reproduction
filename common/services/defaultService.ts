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
    // END OF ENDPOINTS
  }),
  extractRehydrationInfo,
})

export const {
  // END OF EXPORTS
} = defaultService

// const { data, isLoading } = useGetTodoQuery({ id: 2 }, {}) get hook
// const [createTodo, { isLoading, data: createResponse, isSuccess }] = useCreateTodoMutation() create hook
// defaultService.endpoints.getSports.getTodo.select(1)(store.getState()) access data from any function
