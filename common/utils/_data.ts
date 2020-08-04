// import jwt from 'jwt-decode';
// import Constants from './constants';
// import _store  from '../store';
// import AppActions from '../app-actions';

const getQueryString = (params: any): string => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
};

export enum RequestMethod {
  get = 'get',
  put = 'put',
  delete = 'delete',
  post = 'post',
}

interface RequestOptions {
  timeout: number;
  method: RequestMethod;
  headers: any;
  body?: string;
}
const _data = {
  token: '',
  refreshToken: '',
  type: '',

  status(response: any): Promise<any> {
    // handle ajax requests
    // console.debug(response);
    if (response.status === 403) {
      API.logout();
      return Promise.reject({ message: 'UNAUTHORIZED' });
    }
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return response
      .clone()
      .text() // cloned so response body can be used downstream
      .then((err: string) => {
        if (E2E && document.getElementById('e2e-error')) {
          const error = {
            url: response.url,
            status: response.status,
            error: err,
          };
          document.getElementById('e2e-error').innerText = JSON.stringify(
            error,
          );
        }
        API.log(response.url, response.status, err);

        // eslint-disable-next-line
        return Promise.reject({ ...response, _bodyText: err, httpStatus: response.status});
      });
  },

  get(url: string, data?: any, headers?: any): Promise<any> {
    return _data._request(RequestMethod.get, url, data || null, headers);
  },

  put(url: string, data: any, headers?: any): Promise<any> {
    return _data._request(RequestMethod.put, url, data, headers);
  },

  post(url: string, data: any, headers?: any): Promise<any> {
    return _data._request(RequestMethod.post, url, data, headers);
  },

  delete(url: string, data?: any, headers?: any): Promise<any> {
    return _data._request(RequestMethod.delete, url, data, headers);
  },

  _request(
    method: RequestMethod,
    url: string,
    data: any,
    headers: any = {},
  ): Promise<any> {
    const prom = Promise.resolve();

    return prom.then(() => {
      const options: RequestOptions = {
        timeout: 5000,
        method,
        headers: {
          ...headers,
        },
      };
      let qs = '';

      if (method !== RequestMethod.get && !options.headers['content-type'])
        options.headers['content-type'] = 'application/json';

      if (_data.token) {
        // add auth tokens to headers of all requests
        options.headers.AUTHORIZATION = `Token ${_data.token}`;
      }

      if (data) {
        if (method === RequestMethod.get) {
          qs = getQueryString(data);
          url += url.indexOf('?') !== -1 ? `&${qs}` : `?${qs}`;
        } else if (options.headers['content-type'] === 'application/json') {
          options.body = JSON.stringify(data);
        }
      } else if (
        method === RequestMethod.post ||
        method === RequestMethod.put
      ) {
        options.body = '{}';
      }

      if (E2E && document.getElementById('e2e-request')) {
        const payload = {
          url,
          options,
        };
        document.getElementById('e2e-request').innerText = JSON.stringify(
          payload,
        );
      }

      API.log('API', 'REQUEST', method, url, data, headers);

      const req = fetch(url, options);
      return req
        .then(_data.status)
        .then(response => {
          // always return json
          let contentType = response.headers.get('content-type');
          if (!contentType) {
            contentType = response.headers.get('Content-Type');
          }
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json();
          }
          return {};
        })
        .then(response => {
          API.log(
            'API',
            'RESPONSE',
            method,
            url,
            'Response body',
            response,
            'Original request',
            options,
          );
          return response;
        });
    });
  },

  setToken: (_token?: string): void => {
    // set the token for future requests
    _data.token = _token;
  },

  setRefreshToken(_refreshToken?: string): void {
    // set the token for future requests
    _data.refreshToken = _refreshToken;
  },
};
global._data = _data;
export default _data;
