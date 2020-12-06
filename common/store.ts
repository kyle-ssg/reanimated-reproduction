import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import "./app-actions";
import rootSaga from "./saga";
import { AppState } from "./state-type";

let _store;
let _persistor;

export default function (initialState: AppState = {}, forceNewStore?: boolean) {
  // It's very important to only return the cached store on the client, otherwise SSR will return the previous request state
  // @ts-ignore
  if (
    _store &&
    (typeof window !== "undefined" || global.__JEST__ !== "undefined") &&
    !forceNewStore
  ) {
    return _store;
  }

  const persistConfig = {
    key: "root",
    whitelist: [
      "user",
      "profile",
      "feedback",
      "feedbackSummary",
      "menuItems",
      "faqs",
      "theme"
    ],
    storage: API.storage
  };

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, promiseMiddleware];

  const rootReducer = require("./reducer").default;
  const reducer = typeof window === 'undefined' ? rootReducer :persistReducer(persistConfig, rootReducer);

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);
  _store = store;

  if (typeof window !=='undefined') {
    _persistor = persistStore(store);
    // @ts-ignore
    store.__PERSISTOR = persistStore(store);
  }
  return store;
}
