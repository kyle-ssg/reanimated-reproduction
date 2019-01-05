/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';

const HomePage = class extends Component {
    static navigatorStyle = global.navbarStyle;

    displayName: 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
        routes.handleNavEvent(this.props.navigator, 'about', this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        if (event.id === routes.navEvents.SHOW) {
            API.trackPage('About Screen');
        } else if (event.id === routes.navEvents.HIDE) {

        }
    };

    onLogin = () => {
        alert('Logged in');
    };

    render() {
        return (
            <Flex style={Styles.body}>
                <ScrollView>
                    <Container>
                        <H2>
                            About us
                        </H2>
                        <View style={Styles.noPad}>
                            {_.range(0, 12).map(i => (
                                <ListItem
                                  animationProps={Animations.listItem}
                                  index={i}
                                >
                                    <Text>
                                        ListItem
                                        {' '}
                                        {i}
                                    </Text>
                                </ListItem>
                            ))}
                        </View>
                    </Container>
                </ScrollView>
            </Flex>
        );
    }
};


HomePage.propTypes = {};


module.exports = HomePage;
