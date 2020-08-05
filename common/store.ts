
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import './app-actions';
import rootSaga from './saga';
import { AppState } from './state-type';

let _store;
export default function (initialState: AppState = {}, forceNewStore?: boolean) {
  // It's very important to only return the cached store on the client, otherwise SSR will return the previous request state
  if (_store && typeof window !== 'undefined' && !forceNewStore) {
    return _store;
  }
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    promiseMiddleware,
  ];

  const store = createStore(
    require('./reducer').default,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
    // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);
  _store = store;
  return _store;
}
