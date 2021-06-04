import Constants from './constants';

const getQueryString = (params: any): string => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join("&");
};

export enum RequestMethod {
  get = "get",
  put = "put",
  delete = "delete",
  post = "post",
}

interface RequestOptions {
  timeout: number;
  method: RequestMethod;
  headers: any;
  body?: string;
}
const generateE2EURL = (url) => {
  return  url.includes("/media/upload")||url.includes("siteassist-media")? url:`http://localhost:5000?url=${encodeURIComponent(url)}&namespace=${Constants.E2E_NAMESPACE||"default"}&baseUrl=${encodeURIComponent(Project.api)}`
}
const _data = {
  token: "",
  refreshToken: "",
  type: "",
  E2E: Constants.E2E,
  status(response: any): Promise<any> {
    // handle ajax requests
    // console.debug(response);
    if (response.status === 403) {
      API.logout();
      return Promise.reject({ message: "UNAUTHORIZED" });
    }
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return response
      .clone()
      .text() // cloned so response body can be used downstream
      .then((err: string) => {
        // @ts-ignore
        if (typeof E2E !== "undefined" && E2E && document.getElementById("e2e-error")) {
          const error = {
            url: response.url,
            status: response.status,
            error: err,
          };
          document.getElementById("e2e-error").innerText = JSON.stringify(
            error
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

  async _request(
    method: RequestMethod,
    url: string,
    data: any,
    headers: any = {},
    proxied?:boolean
  ): Promise<any> {
    const prom = Promise.resolve();

    const skipAuthHeader = Object.keys(headers).length >0;
    return prom.then(async () => {
      const options: RequestOptions = {
        timeout: 60000,
        method,
        headers: {
          ...headers,
        },
      };
      if (Constants.E2E) {
        options.headers['E2E-Test'] = "1"
      }
      let qs = "";

      if (method !== RequestMethod.get && !options.headers["content-type"])
        options.headers["content-type"] = "application/json";

      const session = await API.auth.Cognito.getSession()
      if (session && session.accessToken) {
        _data.token = session.accessToken.jwtToken;
      }
      if (_data.token && !skipAuthHeader) {
        // add auth tokens to headers of all requests
        options.headers.AUTHORIZATION = `Bearer ${_data.token}`;
      }
      if (data) {
        if (method === RequestMethod.get) {
          qs = getQueryString(data);
          url += url.indexOf("?") !== -1 ? `&${qs}` : `?${qs}`;
        } else if (options.headers["content-type"] === "application/json") {
          options.body = JSON.stringify(data);
        } else {
          options.body = data;
        }
      } else if (
        method === RequestMethod.post ||
        method === RequestMethod.put
      ) {
        options.body = "{}";
      }

      if (Constants.E2E && typeof document !== 'undefined' && document.getElementById("e2e-request")) {
        const payload = {
          url,
          options,
        };
        document.getElementById("e2e-request").innerText = JSON.stringify(
          payload
        );
      }

      API.log("API", "REQUEST", method, url, data, headers);


      const req = fetch(Constants.E2E && !proxied ?generateE2EURL(url): url, options);
      return req
        .then(_data.status)
        .then((response) => {
          // always return json
          let contentType = response.headers.get("content-type");
          if (!contentType) {
            contentType = response.headers.get("Content-Type");
          }
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          }
          return {};
        })
        .then((response) => {
          API.log(
            "API",
            "RESPONSE",
            method,
            url,
            "Response body",
            response,
            "Original request",
            options
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
