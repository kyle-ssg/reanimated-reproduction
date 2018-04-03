const getQueryString = (params) => {
	var esc = encodeURIComponent;
	return Object.keys(params)
		.map(k => `${esc(k)}=${esc(params[k])}`)
		.join('&');
}

module.exports = {
	token: '',
	type: '',

	status: function (response) { //handle ajax requests
		if (response.status == 401) {
			AppActions.setUser(null);
		}
		if (response.status >= 200 && response.status < 300) {
			return Promise.resolve(response);
		} else {
			return response.text()
				.then((err) => {
					Project.debug && console.log(response.url, response.status, err);
					try {
						err = JSON.parse(err)
						if (err && err.error &&

							(

							err.error.indexOf("not authenticated") != -1 ||
							err.error.indexOf("noTokenFound") != -1) ||
							err.error.indexOf("Session expired") != -1
						) {
							AppActions.setUser(null)
						}
					} catch (e) {
					}
					return Promise.reject(err);

				});
		}
	},

	get: function (url, data) {
		return this._request('get', url, data || null);
	},

	dummy: function (data) {
		return function () {
			return new Promise(function (resolve) {
				resolve(data);
			});
		};
	},

	put: function (url, data) {
		return this._request('put', url, data);
	},

	post: function (url, data) {
		return this._request('post', url, data);
	},

	delete: function (url, data) {
		return this._request('delete', url, data);
	},

	_request: function (method, url, data) {
		var options = {
				timeout: 60000,
				method: method,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=utf-8'
				}
			},
			req,
			qs = '';

		if (this.token) { //add auth tokens to headers of all requests
			options.headers['X-Auth-Token'] = this.token;
		}

		if (data) {
			if (method == 'get' || method == 'delete') {
				var qs = getQueryString(data);
				url += url.indexOf('?') !== -1 ? '&' + qs : '?' + qs;
			} else {
				options.body = JSON.stringify(data);
			}
		} else if (method == "post" || method == "put") {
			options.body = "{}";
		}

		req = fetch(url, options);
		return req
			.then(this.status)
			.then(function (response) { //always return json
				var contentType = response.headers.get("content-type");
				if (!contentType) {
					contentType = response.headers.get('Content-Type');
				}
				if (contentType && contentType.indexOf("application/json") !== -1) {
					return response.text()
						.then((res) => {
							try {
								return JSON.parse(res)
							} catch (e) {
								return res
							}
						})
				} else {
					return response.text();
				}
			})
			.then(function (response) {
				Project.debug && console.log(url, 200, response);
				return response;
			});

	},

	setToken: function (_token) {//set the token for future requests
		this.token = _token;
	}
};
