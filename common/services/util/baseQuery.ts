import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AppState } from '../../types/state-type'
import { getStrings } from '../../strings'
import { Constants } from '../../utils'

export default fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
  prepareHeaders: (headers, { getState }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const state = getState() as AppState
    headers.set('Accept-Language', getStrings().getLanguage())
    if (Constants.E2E) {
      headers.set('E2E-Test', '1')
    }
    return headers
  },
})
