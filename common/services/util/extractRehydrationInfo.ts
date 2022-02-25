import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from '@reduxjs/toolkit'

// Handles hydration via redux persist
export default function (
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
