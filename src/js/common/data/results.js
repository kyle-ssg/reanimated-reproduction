var data = require('./_data');

module.exports = {
	getResultsByCodes: function (userId, observationHeadingCodes, limit, offset, orderDirection) {
		//console.log(offset);

		var codeString = '';
		observationHeadingCodes.forEach((code) => {
			codeString += '&code=' + code;
		});

		var getString = Project.api + 'user/' + userId + '/observations?limit=' + limit + '&offset='
			+ offset + '&orderDirection=' + orderDirection + codeString;

		return data.get(getString);
	},
	getResultsSummary: function (userId) {
		return data.get(Project.api + 'user/' + userId + '/observations/summary');
	},
	getResults: function (userId, code) {
		return data.get(Project.api + 'user/' + userId + '/observations/' + code, null, true);
	},
	getAvailableObservationHeadings(userId) {
		return data.get(Project.api + 'user/' + userId + '/availableobservationheadings');
	},
	getSavedObservationHeadings(userId) {
		return data.get(Project.api + 'user/' + userId + '/savedobservationheadings');
	},
	saveObservationHeadingSelection(userId, codes) {
		return data.post(Project.api + 'user/' + userId + '/saveobservationheadingselection', codes);
	}
};
