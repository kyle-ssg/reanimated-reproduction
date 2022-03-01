import { configureStore } from '@reduxjs/toolkit'
import { userService, userSlice } from './hooks/useUser'
import { startupSlice } from './hooks/useStartup'
import { getApi } from './api'
import { localeSlice } from './hooks/useLocale'
// END OF IMPORTS

let _store: any = null
export const store = () => {
  if (_store) return _store
  _store = configureStore({
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
  return _store
}

export type StoreType = ReturnType<ReturnType<typeof store>['getState']>
export type DispatchType = ReturnType<ReturnType<typeof store>['dispatch']>
export type StoreStateType = ReturnType<ReturnType<typeof store>['getState']>
