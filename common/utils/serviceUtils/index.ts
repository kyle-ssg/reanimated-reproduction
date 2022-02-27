import baseQuery from './baseQuery'
import { AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'

export function extractRehydrationInfo(
  action: AnyAction,
  {
    reducerPath,
  }: {
    reducerPath: string
  },
) {
  if (action.type === HYDRATE) {
    return action.payload[reducerPath]
  }
}

export const baseApiOptions = (queryArgs?: Partial<FetchBaseQueryArgs>) => ({
  baseQuery: baseQuery(queryArgs),
  refetchOnFocus: true,
  extractRehydrationInfo,
})
