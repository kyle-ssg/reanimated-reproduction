import createSagaMiddleware from 'redux-saga'
import './app-actions'
import rootReducer from './reducer'
import rootSaga from './saga'
import { getApi } from './api'
import { defaultService } from './services/defaultService'
import { configureStore } from '@reduxjs/toolkit'

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware()
  const webStore = configureStore({
    reducer: {
      root: rootReducer,
      [defaultService.reducerPath]: defaultService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(sagaMiddleware)
        .concat(defaultService.middleware)
        .concat(getApi().middlewares || []),
  })

  sagaMiddleware.run(rootSaga)

  return webStore
}

export type StoreType = ReturnType<typeof createStore>
