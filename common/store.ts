import { configureStore } from '@reduxjs/toolkit'
import useUser, { userService } from './hooks/useUser'
import useStartup from './hooks/useStartup'
import { getApi } from './api'

let _store: any = null
export const store = () => {
  if (_store) return _store
  _store = configureStore({
    reducer: {
      user: useUser,
      startup: useStartup,
      [userService.reducerPath]: userService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(userService.middleware)
        .concat(getApi().middlewares || []),
  })
  return _store
}

export type StoreType = ReturnType<ReturnType<typeof store>['getState']>
export type DispatchType = ReturnType<ReturnType<typeof store>['dispatch']>
export type StoreStateType = ReturnType<ReturnType<typeof store>['getState']>
