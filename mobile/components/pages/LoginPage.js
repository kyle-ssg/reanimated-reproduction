/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import Auth from 'react-native-firebase-auth/auth';

const HomePage = class extends Component {

    static navigatorStyle = global.navbarStyle;

    displayName: 'HomePage'

    constructor(props, context) {
        super(props, context);
        this.state = {};
        routeHelper.handleNavEvent(this.props.navigator, 'login', this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        if (event.id == Constants.navEvents.SHOW) {
            Utils.recordScreenView('Login Screen');
        } else if (event.id == Constants.navEvents.HIDE) {

        }
    };

    render() {
        return (
            <Flex>
                <Container style={Styles.body}>
                    <H2>
                        About us
                    </H2>
                    <LoginProvider onLogin={() => this.props.onLogin(this.props.navigator)}>
                        {(user, isLoading, {facebook, google}) => (
                            <Container style={Styles.body}>
                                <FormGroup>
                                    <Button disabled={isLoading} onPress={facebook}>
                                        Facebook login
                                    </Button>
                                </FormGroup>
                                <FormGroup>
                                    <Button disabled={isLoading} onPress={google}>
                                        Google login
                                    </Button>
                                </FormGroup>
                            </Container>
                        )}
                    </LoginProvider>
                </Container>
            </Flex>
        )
    }
};

HomePage.propTypes = {};


module.exports = HomePage;