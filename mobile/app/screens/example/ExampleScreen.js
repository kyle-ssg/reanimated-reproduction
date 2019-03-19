/**
 * Created by kylejohnson on 28/01/2017.
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';
import AutoHeightImage from 'react-native-auto-height-image';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Svg, {
    Circle,
    Rect,
} from 'react-native-svg';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import AccountStore from '../../../common-mobile/stores/account-store';

const ExampleScreen = class extends Component {
    static propTypes = {
        componentId: propTypes.string,
    };

    static displayName = 'ExampleScreen';

    state = {};

    componentWillMount() {
        ES6Component(this);
        Navigation.events().bindComponent(this);
    }

    componentDidMount() {
        this.listenTo(AccountStore, 'change', () => this.forceUpdate());
        API.push.getInitialNotification()
            .then((e) => {
                if (e) this.onNotification(Object.assign({}, e, { fromClick: true }));
            });
    }

    onNavigatorEvent = (event) => {
        if (event.id === routes.navEvents.SHOW) {
            this.props.navigator.setDrawerEnabled({ side: 'right', enabled: true });
            API.trackPage('Home Screen');
        } else if (event.id === routes.navEvents.HIDE) {
            this.props.navigator.setDrawerEnabled({ side: 'right', enabled: false });
        }
    };

    getInitialLink = () => {
        API.getInitialLink(this.onLink);
    }

    showUpload = () => {
        API.showUpload('Upload a file', false, 100, 100, 0.8, () => {
            this.setState({ isUploading: true });
        })
            .then((res) => {
                alert(JSON.stringify(res));
            });
    };

    openSelect = () => {
        Navigation.showModal(
            routes.selectModal('Select a thing', {
                items: ['item 1', 'item 2'],
                filterItem: (contact, search) => contact.indexOf(search) !== -1,
                onChange: options => this.setState({ options }),
                renderRow: (item, isSelected, toggleItem) => (
                    <ListItem onPress={toggleItem}>
                        <Text>{item}</Text>
                        <Checkbox value={isSelected}/>
                    </ListItem>
                ),
            }),
        );
    };

    selectContact = () => {
        Navigation.showModal(
            routes.contactSelectModal('Select Contact', (contact) => {
                this.setState({ contacts: [contact] });
            }),
        );
    };

    selectMultipleContacts = () => {
        Navigation.showModal(
            routes.contactSelectModal('Select Contacts', (contact) => {
                this.setState({ contacts: [contact] });
            }, true),
        );
    };

    showExampleLightbox = () => {
        Navigation.showOverlay(routes.exampleLightbox());
    };

    openWebModal = () => {
        Navigation.showModal(routes.webModal('https://www.google.com', 'Google'));
    };

    generateLink = () => {
        API.generateLink('SSG Boilerplate', {
            route: {
                screen: 'aboutScreen',
                data: {
                    customData: 'bla',
                },
            },
        }, 'www.solidstategroup.com')
            .then((branchURL) => {
                this.setState({ branchURL });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    registerPush = () => {
        if (this.state.token) {
            this.setState({ token: null });
            API.push.unsubscribe('/topics/all');
            API.push.stop();
        } else {
            this.initPush(false);
        }
    };

    initPush = (silent) => {
        API.push.init(this.onNotification, silent)
            .then((token) => {
                API.push.subscribe('/topics/all');
                this.setState({ token });
            });
    };


    onLink = (notification) => {
        if (notification.route) {
            const route = notification.route;
            if (routes[route.screen]) this.props.navigator.push(routes[route.screen](route.data));
        }
    }

    onNotification = (notification) => {
        if (notification.fromClick) {
            if (notification.route) {
                const route = JSON.parse(notification.route);
                if (routes[route.screen]) this.props.navigator.push(routes[route.screen](route.data));
            }
        }
    };

    triggerError = () => {
        console.log({}.hell.no);
    };

    googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const googleUserInfo = await GoogleSignin.signIn();
            this.setState({ googleUserInfo, error: null });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
                Alert.alert('cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
                Alert.alert('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('play services not available or outdated');
            } else {
                Alert.alert('Something went wrong', error.toString());
                this.setState({
                    error,
                });
            }
        }
    };

    render() {
        const { state: { uri, googleUserInfo }, props: { componentId } } = this;
        return (
            <Flex testID="example-screen">
                <Fade value={1} style={[{ flex: 1 }, Styles.body]} autostart>
                    <Flex>
                        <ScrollView keyboardShouldPersistTaps="handled">
                            <Row>
                                <Flex value={1}>
                                    <Container>
                                        <FormGroup>
                                            <TextInput
                                              onChangeText={val => this.setState({ val })}
                                              value={this.state.val}
                                              placeholder="Example input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <TextInput
                                              onChangeText={val2 => this.setState({ val2 })}
                                              value={this.state.val2}
                                              mask="11:11 am"
                                              placeholder="Example input"
                                            />
                                        </FormGroup>
                                    </Container>
                                </Flex>
                                <Flex/>
                            </Row>
                            <View style={Styles.centeredContainer}>
                                <Loader/>
                            </View>

                            <Text>Auto height image</Text>
                            <AutoHeightImage source={{ uri: 'https://www.placecage.com/c/400/200' }} width={DeviceWidth - 20} />

                            <Button onPress={() => this.setState({ showDatepicker: true })}>
                                Show DatePicker
                            </Button>
                            <DateTimePicker
                              isVisible={this.state.showDatepicker}
                              onConfirm={date => this.setState({ showDatepicker: false, date })}
                              onCancel={() => this.setState({ showDatepicker: false })}
                            />
                            {this.state.date ? (
                                <Text>
You picked
                                    {' '}
                                    {moment(this.state.date).toString()}
                                </Text>
                            ) : null}


                            {this.state.branchURL && (
                                <Fade value={1} autostart>
                                    <Container>
                                        <TextInput value={this.state.branchURL} style={Styles.anchor}/>
                                    </Container>
                                </Fade>
                            )}


                            <ListItem
                              index={0} icon={(
                                  <ION
                                    name="ios-notifications"
                                    style={[Styles.listIcon, { color: pallette.secondary }]}
                                  />
                            )}
                            >
                                <Text>Register for Push</Text>
                                <ReactNative.Switch
                                  value={!!this.state.token}
                                  onChange={this.registerPush}
                                />
                            </ListItem>

                            <GoogleSigninButton
                              style={{ width: 192, height: 48 }}
                              size={GoogleSigninButton.Size.Wide}
                              color={GoogleSigninButton.Color.Dark}
                              onPress={this.googleSignIn}
                            />
                            {googleUserInfo ? (
                                <Text>
You are signed in with Google as
                                    {' '}
                                    {googleUserInfo.user.name}
                                </Text>
                            ) : null}

                            <FBLogin
                              style={{ marginBottom: 10 }}
                              ref={(fbLogin) => { this.fbLogin = fbLogin; }}
                              permissions={['email', 'user_friends']}
                              loginBehavior={FBLoginManager.LoginBehaviors.Native}
                              onLogin={(data) => {
                                  console.log('Logged in!');
                                  console.log(data);
                                  this.setState({ fbUser: data.credentials });
                              }}
                              onLogout={() => {
                                  console.log('Logged out.');
                                  this.setState({ fbUser: null });
                              }}
                              onLoginFound={(data) => {
                                  console.log('Existing login found.');
                                  console.log(data);
                                  this.setState({ fbUser: data.credentials });
                              }}
                              onLoginNotFound={() => {
                                  console.log('No user logged in.');
                                  this.setState({ fbUser: null });
                              }}
                              onError={(err) => {
                                  console.log('ERROR');
                                  console.log(err);
                              }}
                              onCancel={() => {
                                  console.log('User cancelled.');
                              }}
                              onPermissionsMissing={(data) => {
                                  console.log('Check permissions!');
                                  console.log(data);
                              }}
                            />

                            <ListItem index={1} onPress={() => Navigation.push(componentId, routes.markupScreen())}>
                                <Text>Markup</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={1} onPress={() => Navigation.push(componentId, routes.aboutScreen())}>
                                <Text>About</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={1} onPress={this.showExampleLightbox}>
                                <Text>Example Lightbox</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem
                              index={1} onPress={() => Navigation.push(componentId, routes.interactiveScreen())}
                            >
                                <Text>Interactive examples</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem
                              index={1} onPress={this.openWebModal}
                            >
                                <Text>Web modal</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={2} onPress={this.showUpload}>
                                <Text>Show Upload</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={3} onPress={this.selectContact}>
                                <Text>
                                    Select Contact
                                    {' '}
                                    {this.state.contacts
                                    && (
                                        <Text>
                                            (
                                            {_.map(this.state.contacts, 'givenName').join(',')}
                                            )
                                        </Text>
                                    )
                                    }
                                </Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>
                            <ListItem index={4} onPress={this.selectMultipleContacts}>
                                <Text>
                                    Select Multiple Contacts
                                    {' '}
                                    {this.state.contacts
                                    && (
                                        <Text>
                                            (
                                            {_.map(this.state.contacts, 'givenName').join(',')}
                                            )
                                        </Text>
                                    )
                                    }
                                </Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>


                            <ListItem index={5} onPress={this.openSelect}>
                                <Text>Generic Select</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={6} onPress={() => API.share('www.google.com', 'Just google')}>
                                <Text style={Styles.anchor}>Share something</Text>
                            </ListItem>

                            <ListItem index={8} onPress={this.generateLink}>
                                <Text style={[Styles.anchor]}>Generate branch link</Text>
                            </ListItem>
                            <ListItem index={9} onPress={this.getInitialLink}>
                                <Text style={[Styles.anchor]}>Get initial branch link</Text>
                            </ListItem>

                            <ListItem index={7} onPress={this.triggerError}>
                                <Text style={[Styles.anchor, { color: 'red' }]}>
                                    Trigger Crashlytics error (this will crash the app)
                                </Text>
                            </ListItem>

                            {uri ? (
                                <Image
                                  style={{ height: 100, width: 100 }} resizeMode="contain"
                                  source={{ uri }}
                                />
                            ) : null}

                            <Svg height="300" width="300" viewBox="0 0 100 100">
                                <Circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  stroke="blue"
                                  strokeWidth="2.5"
                                  fill="green"
                                />
                                <Rect
                                  x="15"
                                  y="15"
                                  width="70"
                                  height="70"
                                  stroke="red"
                                  strokeWidth="2"
                                  fill="yellow"
                                />
                            </Svg>

                            <Text>
You are using a
                                {' '}
                                {DeviceInfo.getModel()}
                            </Text>


                        </ScrollView>
                    </Flex>
                </Fade>
            </Flex>
        );
    }
};

module.exports = ExampleScreen;
