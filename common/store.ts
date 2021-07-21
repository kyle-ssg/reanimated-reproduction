import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import './app-actions'
import rootSaga from './saga'
import rootReducer from './reducer'
import { AppState } from './state-type'
import { PersistConfig } from 'redux-persist/es/types'

let store

export default function createAppStore(
  initialState: AppState = {},
  forceNewStore?: boolean,
) {
  // It's very important to only return the cached store on the client, otherwise SSR will return the previous request state
  // @ts-ignore
  if (
    store &&
    (typeof window !== 'undefined' || global.__JEST__ !== 'undefined') &&
    !forceNewStore
  ) {
    return store
  }

  const sagaMiddleware = createSagaMiddleware()

  const isClient = typeof window !== 'undefined'
  const middlewares = API.middlewares
    ? [sagaMiddleware, ...API.middlewares]
    : [sagaMiddleware]

  if (isClient) {
    const { persistReducer } = require('redux-persist')
    const storage =
      API.reduxStorage || require('redux-persist/lib/storage').default

    const persistConfig: PersistConfig<any, any, any> = {
      key: 'root',
      whitelist: ['profile'],
      storage,
    }

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares)),
    )

    store.__PERSISTOR = persistStore(store)
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware),
    )
  }

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}
