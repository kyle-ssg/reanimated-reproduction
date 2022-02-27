import { configureStore } from '@reduxjs/toolkit'
import { userService, userSlice } from './hooks/useUser'
import { startupSlice } from './hooks/useStartup'
import { getApi } from './api'
//END OF STORE_IMPORTS

let _store: any = null
export const store = () => {
  if (_store) return _store
  _store = configureStore({
    reducer: {
      [userService.reducerPath]: userService.reducer,
      user: userSlice.reducer,
      startup: startupSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userService.middleware)
        //END OF STORE_MIDDLEWARE
        .concat(getApi().middlewares || []),
  })
  return _store
}

export type StoreType = ReturnType<ReturnType<typeof store>['getState']>
export type DispatchType = ReturnType<ReturnType<typeof store>['dispatch']>
export type StoreStateType = ReturnType<ReturnType<typeof store>['getState']>
