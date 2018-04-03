/**
 * Created by kyle-ssg on 02/03/15.
 */
module.exports = {
	error: function (store, res) {

		var error = res.statusText || res.message;
		// var url = res.url;

		try {
			error = JSON.parse(res._bodyText || res._body);
			error = error.error ? error.error.message : error.message;
		} catch (e) {
			error = '';
		}

		switch (res.status) {
			case 404:
				break;
			case 503:
				break;
			default:
		}

		if (store) {
			store.error = error;
			store.goneABitWest();
		}
		store.loaded();
		store.saved();
	}
};
