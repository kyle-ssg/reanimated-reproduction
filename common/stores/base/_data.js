const getQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
};

export default {
  token: '',
  type: '',

  status(response) { // handle ajax requests
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    if (response.status === 401) {
      AppActions.setUser(null);
    }
    response.clone().text() // cloned so response body can be used downstream
      .then((err) => {
        API.log(response.url, response.status, err);
      });
    return Promise.reject(response);
  },

  get(url, data) {
    return this._request('get', url, data || null);
  },

  put(url, data) {
    return this._request('put', url, data);
  },

  post(url, data) {
    return this._request('post', url, data);
  },

  delete(url, data) {
    return this._request('delete', url, data);
  },

  _request(method, url, data) {
    const options = {
      timeout: 60000,
      method,
      headers: {
        'Accept': 'application/json',
      },
    };

    let qs = '';
    let parsedUrl = url;
    if (method !== 'get') options.headers['Content-Type'] = 'application/json; charset=utf-8';

    if (this.token) { // add auth tokens to headers of all requests
      options.headers.AUTHORIZATION = `Token ${this.token}`;
    }

    if (data) {
      if (method === 'get') {
        qs = getQueryString(data);
        parsedUrl += url.indexOf('?') !== -1 ? `&${qs}` : `?${qs}`;
      } else {
        options.body = JSON.stringify(data);
      }
    } else if (method === 'post' || method === 'put') {
      options.body = '{}';
    }

    const req = fetch(parsedUrl, options);
    return req
      .then(this.status)
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
        API.log(parsedUrl, 200, response);
        return response;
      });
  },

  setToken(_token) { // set the token for future requests
    this.token = _token;
  },
};
