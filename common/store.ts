import { configureStore } from '@reduxjs/toolkit'
import { userService, userSlice } from './hooks/useUser'
import { startupSlice } from './hooks/useStartup'
import { getApi } from './api'
import { localeSlice } from './hooks/useLocale'
// END OF IMPORTS
const createStore = () =>
  configureStore({
    reducer: {
      [userService.reducerPath]: userService.reducer,
      locale: localeSlice.reducer,
      startup: startupSlice.reducer,
      user: userSlice.reducer,
      // END OF REDUCERS
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userService.middleware)
        // END OF MIDDLEWARE
        .concat(getApi().middlewares || []),
  })

type StoreType = ReturnType<typeof createStore>
let _store: StoreType

export const store = function (): StoreType {
  if (_store) return _store
  _store = createStore()
  return _store
}

export type StoreStateType = ReturnType<StoreType['getState']>
