import { put, all, takeLatest } from 'redux-saga/effects';
import _data from './utils/_data';

export function* getAction(action, url, prefix) {
    try {
        const data = yield _data.get(url);
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (action.id) {
            params.index = action.id;
        }
        yield put(params);
        action.onSuccess && action.onSuccess();
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
    }
}

export function* updateAction(action, url, prefix) {
    try {
        const data = yield _data.put(url, action.data);
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (action.id) {
            params.index = action.id;
        }
        yield put(params);
        action.onSuccess && action.onSuccess();
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
    }
}

export function* postAction(action, url, prefix) {
    try {
        const data = yield _data.post(url, action.data);
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (action.id) {
            params.index = action.id;
        }
        yield put(params);
        action.onSuccess && action.onSuccess();
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
    }
}

export function* startup(action = {}) {
    const {
        ...rest
    } = action.data || {};

    const token = action.data.token;
    const refreshToken = action.data.refreshToken;

    if (token) {
        _data.setToken(token);
    }
    if (refreshToken) {
        _data.setRefreshToken(refreshToken);
    }

    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
    yield put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline, ...rest } });

    if (token) {
        // console.log('startup userData', userData);
        yield put({ type: Actions.LOGIN_LOADED, data: { ready: true, token } });
    }
}


export function* login(action) {
    const { username, password } = action.data;
    try {
        const { sessionData } = yield API.USER.authenticateUser(username, password);
        yield put({ type: Actions.LOGIN_LOADED, data: sessionData });
        action.onSuccess && action.onSuccess();
        API.loggedIn();
    } catch (e) {
        yield put(API.ajaxHandler(Actions.LOGIN_ERROR, e));
        action.onErr && action.onErr();
    }
}

export function* register(action) {
    // const { } = action.data;
    try {
        action.onSuccess && action.onSuccess();
    } catch (e) {
        yield put(API.ajaxHandler(Actions.REGISTER_ERROR, e));
        action.onErr && action.onErr();
    }
}

export function* logout() {
    yield put({ type: Actions.CLEAR_USER });
    yield API.setStoredToken(null);
    yield API.setStoredRefreshToken(null);
    _data.setToken(null);
    _data.setRefreshToken(null);
    API.logout();
    // Err state, try catch.
}

function* rootSaga() {
    yield all([
        takeLatest(Actions.STARTUP, startup),
        takeLatest(Actions.LOGIN, login),
        takeLatest(Actions.REGISTER, register),
        takeLatest(Actions.LOGOUT, logout),
    ]);
}

export default rootSaga;
