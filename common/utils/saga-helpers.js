// Error handler for a CRUD redux action
import { Actions } from "../app-actions";
import { put } from "redux-saga/effects";
import _data from "./_data";

export function* errorHandler(action, prefix, preventSuccess, e) {
  const error = API.ajaxHandler(Actions[`${prefix}_ERROR`], e);
  yield put(error);
  action.onError && action.onError(error.error);
  if (preventSuccess) {
    throw e;
  }
}

// Success handler for a CRUD redux action
export function* handleResponse(
  action,
  prefix,
  apiResult,
  preventSuccess,
  dto,
  ignoreId,
) {
  const data = yield dto ? dto(apiResult) : apiResult;
  const params = { type: Actions[`${prefix}_LOADED`], data, originalAction:action };
  if (data?.token) {
    // API.setStoredToken(data.token);
    _data.setToken(data.token);
  }
  if (action.data && action.data.id && !ignoreId) {
    params.index = action.data.id;
  }
  yield put(params);
  action.onSuccess && !preventSuccess && action.onSuccess(data);
  return data;
}

// GET request with standard response and error handler
export function* getAction(action, url, prefix, preventSuccess, dto, ignoreId) {
  try {
    const postfix = action.data && Object.keys(action.data).length ? "?"+Utils.toParam(action.data) :""
    const data = yield _data.get(`${url}${postfix}`);
    return yield handleResponse(action, prefix, data, preventSuccess, dto, ignoreId);
  } catch (e) {
    yield errorHandler(action, prefix, preventSuccess, e);
  }
}

// PUT request with standard response and error handler
export function* updateAction(
  action,
  url,
  prefix,
  preventSuccess,
  dto,
  requestDto,
  append = true
) {
  try {
    const request = yield requestDto ? requestDto(action.data) : action.data;
    const data = yield _data.put(url, request);
    return yield handleResponse(
      action,
      prefix,
      data,
      preventSuccess,
      dto,
      append
    );
  } catch (e) {
    yield errorHandler(action, prefix, preventSuccess, e);
  }
}

// PATCH request with standard response and error handler
export function* patchAction(
  action,
  url,
  prefix,
  preventSuccess,
  dto,
  requestDto,
  append = true
) {
  try {
    const request = yield requestDto ? requestDto(action.data) : action.data;
    const data = yield _data.patch(url, request);
    return yield handleResponse(
      action,
      prefix,
      data,
      preventSuccess,
      dto,
      append
    );
  } catch (e) {
    yield errorHandler(action, prefix, preventSuccess, e);
  }
}

// POST request with standard response and error handler
export function* postAction(
  action,
  url,
  prefix,
  preventSuccess,
  dto,
  requestDto,
  append = true
) {
  try {
    const data = yield _data.post(
      url,
      requestDto ? requestDto(action.data) : action.data
    );
    return yield handleResponse(
      action,
      prefix,
      data,
      preventSuccess,
      dto,
      append
    );
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
