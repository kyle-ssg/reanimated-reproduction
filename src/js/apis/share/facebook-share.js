/**
 * Created by kylejohnson on 25/07/2016.
 */
import '../libs/fb';

module.exports = (url) => { // share to twitter
	FB.ui({
		method: 'share',
		href: url
	});
};
