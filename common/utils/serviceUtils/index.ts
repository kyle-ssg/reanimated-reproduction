import baseQuery from './baseQuery'
import { AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

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

export const baseApiOptions = {
  baseQuery,
  refetchOnFocus: true,
  extractRehydrationInfo,
}
