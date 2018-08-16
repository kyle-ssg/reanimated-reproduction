/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, {Component, PropTypes} from 'react';

const HomePage = class extends Component {

	static navigatorStyle = global.navbarStyle;

	displayName: 'HomePage'

	constructor(props, context) {
		super(props, context);
		this.state = {};
		routeHelper.handleNavEvent(this.props.navigator, 'login', this.onNavigatorEvent);
	}

	onNavigatorEvent = (event) => {
		if (event.id == routeHelper.navEvents.SHOW) {
			Utils.recordScreenView('Login Screen');
		} else if (event.id == routeHelper.navEvents.HIDE) {

		} else if (event.id == "close") {
			this.props.navigator.dismissModal()
		}
	};

	render() {
		return (
			<Flex>
				<Container style={Styles.body}>
					<H2>
						You need to login to view this page
					</H2>

				</Container>
			</Flex>
		)
	}
};

HomePage.propTypes = {};


module.exports = HomePage;
