import { put, all, takeLatest } from 'redux-saga/effects';
import _data from './utils/_data';
import { Actions } from './app-actions';
import Project from './project';
// Util function to post to an api, parse results and dispatch loaded and error functions

// Error handler for a CRUD redux action
export function* errorHandler(action, prefix, preventSuccess, e) {
    const error = API.ajaxHandler(Actions[`${prefix}_ERROR`], e);
    yield put(error);
    action.onError && action.onError(error.error);
    if (preventSuccess) {
        throw e;
    }
}

// Success handler for a CRUD redux action
export function* handleResponse(action, prefix, apiResult, preventSuccess, dto) {
    const data = yield dto ? dto(apiResult) : apiResult;
    const params = { type: Actions[`${prefix}_LOADED`], data };
    if (data.token) {
        // API.setStoredToken(data.token);
        _data.setToken(data.token);
    }
    if (action.id) {
        params.index = action.id;
    }
    yield put(params);
    action.onSuccess && !preventSuccess && action.onSuccess(data);
    return data;
}

// GET request with standard response and error handler
export function* getAction(action, url, prefix, preventSuccess, dto) {
    try {
        const data = yield _data.get(url);
        return yield handleResponse(action, prefix, data, preventSuccess, dto);
    } catch (e) {
        yield errorHandler(action, prefix, preventSuccess, e);
    }
}

// PUT request with standard response and error handler
export function* updateAction(action, url, prefix, preventSuccess, dto, requestDto, append = true) {
    try {
        const data = yield _data.put(url, requestDto ? requestDto(action.data) : action.data);
        return yield handleResponse(action, prefix, data, preventSuccess, dto, append);
    } catch (e) {
        yield errorHandler(action, prefix, preventSuccess, e);
    }
}

// POST request with standard response and error handler
export function* postAction(action, url, prefix, preventSuccess, dto, requestDto, append = true) {
    try {
        const data = yield _data.post(url, requestDto ? requestDto(action.data) : action.data);
        return yield handleResponse(action, prefix, data, preventSuccess, dto, append);
    } catch (e) {
        yield errorHandler(action, prefix, preventSuccess, e);
    }
}

export function* deleteAction(action, url, prefix, preventSuccess) {
    try {
        const data = yield _data.delete(url, {});
        return yield handleResponse(action, prefix, data, preventSuccess);
    } catch (e) {
        yield errorHandler(action, prefix, preventSuccess, e);
    }
}

// Called when the application starts up, if using SSR this is done in the server
export function* startup(action = {}) {
    try {
        const {
            ...rest
        } = action.data || {};

        const token = _.get(action, 'data.token');
        const refreshToken = _.get(action, 'data.refreshToken');

        if (refreshToken) {
            _data.setRefreshToken(refreshToken);
        }

        if (token) {
            _data.setToken(token);
            yield onToken(action)
        }

        const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;

        yield put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline, ...rest } });
        if (action.onSuccess) {
            action.onSuccess();
        }
    } catch (e) {
        yield put(API.ajaxHandler(Actions.STARTUP_ERROR, e));
        action.onError && action.onError();
    }
}

export function* onToken(action) {
    //  Do a get here for your user data etc, data.token is already set
    yield handleResponse(action, "LOGIN", { user:{} }, false);
}

export function* login(action) {
    try {
        const res = yield _data.post(`${Project.api}auth/login/`, action.data);
        API.trackEvent(Constants.events.LOGIN);
        API.identify(action.data.email);
        _data.setToken(res.token);
        API.setStoredToken(res.token);
        yield onToken(action);
    } catch (e) {
        yield put(API.ajaxHandler(Actions.LOGIN_ERROR, e));
        action.onError && action.onError();
    }
}

export function* register(action) {
    yield postAction(action, `${Project.api}user/register`, 'REGISTER');
}

export function* logout(action) {
    yield put({ type: Actions.CLEAR_USER });
    yield API.setStoredToken(null);
    yield API.setCookie('user', null);
    yield API.setStoredRefreshToken(null);
    _data.setToken(null);
    _data.setRefreshToken(null);
    API.logout();
    action.onSuccess && action.onSuccess();
}

export function* confirmEmail(action) {
    yield postAction(action, `${Project.api}user/verify/email`, 'CONFIRM_EMAIL');
}

export function* updateUser(action) {
    yield updateAction(action, `${Project.api}user/${action.data.id}`, 'UPDATE_USER');
}

// END OF YIELDS

function* rootSaga() {
    yield all([
        takeLatest(Actions.STARTUP, startup),
        takeLatest(Actions.LOGIN, login),
        takeLatest(Actions.REGISTER, register),
        takeLatest(Actions.LOGOUT, logout),
        takeLatest(Actions.CONFIRM_EMAIL, confirmEmail),
        takeLatest(Actions.UPDATE_USER, updateUser),
        // END OF TAKE_LATEST
    ]);
}

export default rootSaga;
