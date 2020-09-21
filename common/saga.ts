import { put, all, takeLatest, takeEvery, select } from "redux-saga/effects";
import _data from "./utils/_data";
import { Actions, Callbacks } from './app-actions';
import Project from "./project";

type IAction = Callbacks & AnyAction &{
  data?: any
}
import {
  handleResponse,
  updateAction,
  // eslint-disable-next-line no-unused-vars
  deleteAction,
  // eslint-disable-next-line no-unused-vars
  errorHandler,
  // eslint-disable-next-line no-unused-vars
  getAction,
  postAction,
} from "./utils/saga-helpers";
import { AnyAction } from 'redux';

// Called when the application starts up, if using SSR this is done in the server
export function* startup(action : IAction) {
  try {
    const { ...rest } = action.data || {};
    const token = action.data?.token;
    const refreshToken = action.data?.refreshToken;

    if (refreshToken) {
      _data.setRefreshToken(refreshToken);
    }

    if (token) {
      _data.setToken(token);
      // set the user
      yield onToken(action, {  } );
    }

    const isOnline = typeof navigator === "undefined" ? true : navigator.onLine;
    const data =  { ready: true, isOnline, ...rest };
    yield put({
      type: Actions.STARTUP_LOADED,
      data: { ready: true, isOnline, ...rest },
    });
    if (action.onSuccess) {
      action.onSuccess(data);
    }
  } catch (e) {
    yield put(API.ajaxHandler(Actions.STARTUP_ERROR, e));
    if (action?.onError) {
      action.onError({ error:e });
    }
  }
}

export function* onToken(action, result) {
  //  If you need to refresh a user profile, do it here
  yield handleResponse(action, "LOGIN", result, false);
}

export function* login(action) {
  try {
    const res = yield _data.post(`${Project.api}auth/login/`, action.data);
    API.trackEvent(Constants.events.LOGIN);
    API.identify(action.data.email);
    // _data.setToken(res.token);
    // API.setStoredToken(res.token);
    yield onToken(action, res);
  } catch (e) {
    yield put(API.ajaxHandler(Actions.LOGIN_ERROR, e));
    action.onError && action.onError();
  }
}

export function* register(action) {
  yield postAction(action, `${Project.api}user/register`, "REGISTER");
}

export function* logout(action) {
  yield API.setStoredToken(null);
  yield API.storage.removeItem("user");
  yield API.setStoredRefreshToken(null);
  _data.setToken(null);
  _data.setRefreshToken(null);
  API.logout();
  yield put({ type: Actions.CLEAR_USER });
  action.onSuccess && action.onSuccess();
}

export function* confirmEmail(action) {
  yield postAction(action, `${Project.api}user/verify/email`, "CONFIRM_EMAIL");
}

export function* updateUser(action) {
  yield updateAction(
    action,
    `${Project.api}user/${action.data.id}`,
    "UPDATE_USER"
  );
}

// END OF YIELDS

function* rootSaga() {
  yield all([
    takeLatest(Actions.LOGIN, login),
    takeLatest(Actions.REGISTER, register),
    takeLatest(Actions.LOGOUT, logout),
    takeLatest(Actions.CONFIRM_EMAIL, confirmEmail),
    takeLatest(Actions.UPDATE_USER, updateUser),
    takeLatest(Actions.STARTUP, startup),
    // END OF TAKE_LATEST
    // KEEP THE ABOVE LINE IN, IT IS USED BY OUR CLI
  ]);
}

export default rootSaga;
