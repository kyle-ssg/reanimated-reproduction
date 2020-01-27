import { put, all, takeLatest } from 'redux-saga/effects';
import _data from './utils/_data';
import './app-actions';
// Util function to post to an api, parse results and dispatch loaded and error functions
export function* getAction(action, url, prefix, preventSuccess, dto) {
    try {
        let data = yield _data.get(url);
        if (dto) {
            data = dto(data);
        }
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (data.token) {
            API.setStoredToken(data.token);
            _data.setToken(data.token);
        }
        if (action.id) {
            params.index = action.id;
        }
        yield put(params);
        action.onSuccess && !preventSuccess && action.onSuccess(data);
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
    }
}

export function* updateAction(action, url, prefix, preventSuccess, dto, requestDto) {
    try {
        let data = yield _data.put(url, requestDto ? requestDto(action.data) : action.data);
        if (dto) {
            data = dto(data);
        }
        if (data.token) {
            API.setStoredToken(data.token);
            _data.setToken(data.token);
        }
        if (data.userType || data.emailVerified) {
            API.setCookie('user', JSON.stringify(data));
        }
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (action.id) {
            params.index = action.id;
        }
        yield put(params);
        action.onSuccess && !preventSuccess && action.onSuccess(data);
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
        if (preventSuccess) {
            throw e;
        }
    }
}

export function* postAction(action, url, prefix, preventSuccess, dto, requestDto, appendId = true) {
    try {
        let data = yield _data.post(url, requestDto ? requestDto(action.data) : action.data);
        if (dto) {
            data = dto(data);
        }
        if (data.token) {
            API.setStoredToken(data.token);
            _data.setToken(data.token);
        }
        const params = { type: Actions[`${prefix}_LOADED`], data };
        if (action.id) {
            params.index = action.id;
        } else if (appendId) {
            params.index = data.id;
        }
        yield put(params);
        action.onSuccess && !preventSuccess && action.onSuccess(data);
        return data;
    } catch (e) {
        yield put(API.ajaxHandler(Actions[`${prefix}_ERROR`], e));
        action.onError && action.onError();
    }
}

// Called when the application starts up
export function* startup(action = {}) {
    try {
        const {
            ...rest
        } = action.data || {};

        const token = action.data && action.data.token;
        const refreshToken = action.data && action.data.refreshToken;

        if (token) {
            _data.setToken(token);
        }
        if (refreshToken) {
            _data.setRefreshToken(refreshToken);
        }

        const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
        yield put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline, ...rest } });

        if (token && action.data.user) {
            // console.log('startup userData', userData);
            yield put({ type: Actions.LOGIN_LOADED, data: action.data.user });
        }
        if (action.onSuccess) {
            action.onSuccess();
        }
    } catch (e) {
        yield put(API.ajaxHandler(Actions.STARTUP_ERROR, e));
        action.onError && action.onError();
    }
}

export function* login(action) {
    try {
        const data = yield _data.post(`${Project.api}user/login`, action.data);
        if (data.token || data.userType) {
            API.setStoredToken(data.token);
            _data.setToken(data.token);
        }
        yield getAction(action, `${Project.api}user/my-account`, 'LOGIN');
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
    // Err state, try catch.
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
