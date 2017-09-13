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
        if (event.id == Constants.navEvents.SHOW) {
            Utils.recordScreenView('About Screen');
        } else if (event.id == Constants.navEvents.HIDE) {

        }
    };

    onLogin = () => {
        alert("Logged in")
    }

    render() {
        return (
            <ScrollView style={Styles.body}>
                <Container style={Styles.body}>
                    <H2>
                        About us
                    </H2>
					{_.map(_.range(0,20),(i)=>(
						<ListItem index={i}>
							<Text>List Item {i+1}</Text>
						</ListItem>
					))}

                </Container>
            </ScrollView>
        )
    }
};

HomePage.propTypes = {};


module.exports = HomePage;
