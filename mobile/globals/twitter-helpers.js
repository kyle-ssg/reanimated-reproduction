var r, s;
import twitter, {auth} from 'react-native-twitter';

module.exports = {
	init(tokens) {
		console.log(tokens)
		const {rest, stream} = twitter(tokens);
		r = rest;
		s = stream
	},
	tweet(status, options) {
		return r.post('statuses/update', {status})
	},
	reply(status, in_reply_to_status_id_str, options) {
		return r.post('statuses/update', {...options, status, in_reply_to_status_id_str})
	},
	quote(status, quoted_status_id_str, options) {
		return r.post('statuses/update', {
			...options,
			status: `${status} https://twitter.com/chorus/status/${quoted_status_id_str}`
		})
	},
	retweet(id) {
		return r.post(`statuses/retweet/${id}`)
	},
	unretweet(id) {
		return r.post(`statuses/unretweet/${id}`)
	},
	auth
}
