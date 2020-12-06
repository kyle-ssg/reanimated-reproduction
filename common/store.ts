import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import "./app-actions";
import rootSaga from "./saga";
import rootReducer from './reducer'
import { AppState } from "./state-type";

let store;

export default function (initialState: AppState = {}, forceNewStore?: boolean) {
  // It's very important to only return the cached store on the client, otherwise SSR will return the previous request state
  // @ts-ignore
  if (
    store &&
    (typeof window !== "undefined" || global.__JEST__ !== "undefined") &&
    !forceNewStore
  ) {
    return store;
  }

  const sagaMiddleware = createSagaMiddleware();

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = API.reduxStorage || require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    );
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;

}
