import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { StoreStateType } from '../../store'
import { getStrings } from '../../strings'
import { Constants } from '../../utils'
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'

// every endpoint goes through this
export default function (args: Partial<FetchBaseQueryArgs> = {}) {
  return fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: (headers, { getState }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const state = getState() as StoreStateType
      headers.set('Accept-Language', getStrings().getLanguage())
      if (Constants.E2E) {
        headers.set('E2E-Test', '1')
      }
      return headers
    },
    ...args,
  })
}
