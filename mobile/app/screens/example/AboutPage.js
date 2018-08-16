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
		routeHelper.handleNavEvent(this.props.navigator, 'about', this.onNavigatorEvent);
	}

	onNavigatorEvent = (event) => {
		if (event.id == routeHelper.navEvents.SHOW) {
			API.trackPage('About Screen');
		} else if (event.id == routeHelper.navEvents.HIDE) {

		}
	};

	onLogin = () => {
		alert("Logged in")
	}

	render() {
		return (
			<Flex style={Styles.body}>
				<ScrollView>
					<Container style={Styles.body}>
						<H2>
							About us
						</H2>
						{_.range(0, 12).map((i) => (
							<ListItem index={i}>
								<Text>
									ListItem {i}
								</Text>
							</ListItem>
						))}
					</Container>
				</ScrollView>
			</Flex>
		)
	}
};


HomePage.propTypes = {};


module.exports = HomePage;
