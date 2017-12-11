import _ from 'lodash'
module.exports = _.assign({}, require('./base/_action-constants'), {
	"ACTIVE": "ACTIVE",
    "INACTIVE": "INACTIVE",
    "CONNECTED": "CONNECTED",
    "DISCONNECTED": "DISCONNECTED",
    "GET_DEBT": "GET_DEBT",
    "CREATE_BILL": "CREATE_BILL",
    "MARK_AS_PAID": "MARK_AS_PAID",
});
