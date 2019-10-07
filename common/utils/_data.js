import fetch from 'isomorphic-unfetch';
import jwt from 'jwt-decode';
import Constants from './constants';
// import { getStoreDangerous } from '../store';
// import AppActions from '../app-actions';

const getQueryString = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');
};

const _data = {
    token: '',
    type: '',

    status(response) { // handle ajax requests
        // console.debug(response);
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        return response.clone().text() // cloned so response body can be used downstream
            .then((err) => {
                if (E2E && document.getElementById('e2e-error')) {
                    const error = {
                        url: response.url,
                        status: response.status,
                        error: err,
                    };
                    document.getElementById('e2e-error').innerText = JSON.stringify(error);
                }
                API.log(response.url, response.status, err);

                // eslint-disable-next-line
                return Promise.reject({ ...response, _bodyText: err, httpStatus: response.status});
            });
    },

    get(url, data, headers) {
        return _data._request('get', url, data || null, headers);
    },

    dummy(data) {
        return () => {
            return new Promise(((resolve) => {
                resolve(data);
            }));
        };
    },

    put(url, data, headers) {
        return _data._request('put', url, data, headers);
    },

    post(url, data, headers) {
        return _data._request('post', url, data, headers);
    },

    delete(url, data, headers) {
        return _data._request('delete', url, data, headers);
    },

    _request(method, url, data, headers = {}) {
        const prom  = Promise.resolve();

        // Example refresh token logic
        // const parsedData = _data.tokenParsed;
        // const refreshToken = _data.refreshToken;
        // if (!parsedData) { // no token, nothing to refresh
        //     prom = Promise.resolve(null);
        // } else {
        //     const expiry = new Date(parsedData.exp * 1000);
        //     const hasExpired = new Date().valueOf() > expiry.valueOf();
        //     const username = parsedData['cognito:username'];
        //     if (hasExpired) {
        //         prom = API.USER.refreshSession(refreshToken, username)
        //             .then(({ sessionData }) => {
        //                 const store = getStoreDangerous();
        //                 _data.setToken(sessionData.idToken);
        //                 _data.setRefreshToken(sessionData.refreshToken);
        //                 store.dispatch({
        //                     type: 'REFRESH_TOKENS',
        //                     data: sessionData,
        //                 });
        //                 return sessionData.idToken;
        //             });
        //     } else {
        //         prom = Promise.resolve(_data.token);
        //     }
        // }


        return prom
            .then(() => {
                const options = {
                    timeout: 5000,
                    method,
                    headers: {
                        'Accept': 'application/json',
                        ...headers,
                    },
                };
                let qs = '';

                if (method !== 'get') options.headers['Content-Type'] = 'application/json; charset=utf-8';

                if (_data.token) { // add auth tokens to headers of all requests
                    options.headers.AUTHORIZATION = `Bearer ${_data.token}`;
                }

                if (data) {
                    if (method === 'get') {
                        qs = getQueryString(data);
                        url += url.indexOf('?') !== -1 ? `&${qs}` : `?${qs}`;
                    } else {
                        options.body = JSON.stringify(data);
                    }
                } else if (method === 'post' || method === 'put') {
                    options.body = '{}';
                }

                if (E2E && document.getElementById('e2e-request')) {
                    const payload = {
                        url,
                        options,
                    };
                    document.getElementById('e2e-request').innerText = JSON.stringify(payload);
                }

                API.log('API', 'REQUEST', method, url, data, headers);

                const req = fetch(url, options);
                return req
                    .then(_data.status)
                    .then((response) => { // always return json
                        let contentType = response.headers.get('content-type');
                        if (!contentType) {
                            contentType = response.headers.get('Content-Type');
                        }
                        if (contentType && contentType.indexOf('application/json') !== -1) {
                            return response.json();
                        }
                        return {};
                    })
                    .then((response) => {
                        API.log('API', 'RESPONSE', method, url, 'Response body', response, 'Original request', options);
                        return response;
                    })
                    .catch((e) => {
                        // console.debug(e);
                        if (e.httpStatus === 401)
                        {
                            throw new Error('Network request failed - Unauthorized');
                        }

                        if (e._bodyText) {
                            throw new Error(e._bodyText);
                        } else {
                            throw new Error(Constants.simulate.FAKE_API_ERROR ? 'API Error' : 'Network request failed');
                        }
                    });
            });
    },

    setToken(_token) { // set the token for future requests
        _data.token = _token;
        _data.tokenParsed = _token ? jwt(_token) : null;
    },

    setRefreshToken(_refreshToken) { // set the token for future requests
        _data.refreshToken = _refreshToken || {};
        _data.refreshToken.getToken = () => _data.refreshToken.token;
    },
};
global._data = _data;
export default _data;
