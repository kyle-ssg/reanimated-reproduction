/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import AccountStore from '../../../common-mobile/stores/account-store';

const HomePage = class extends Component {
    static navigatorStyle = global.navbarStyle;

    static displayName= 'ExamplesScreen';

    static propTypes = {
        navigator: propTypes.object,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {};
        ES6Component(this);
        routes.handleNavEvent(props.navigator, 'home', this.onNavigatorEvent);
        this.initPush(true);
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

    subscribeToLink = () => {
        API.onLinkPressed(this.onLink);
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
        this.props.navigator.showModal(
            routes.selectScreen('Select a thing', {
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
        this.props.navigator.showModal(
            routes.contactScreen('Select Contact', (contact) => {
                this.setState({ contacts: [contact] });
            }),
        );
    };

    selectMultipleContacts = () => {
        this.props.navigator.showModal(
            routes.contactScreen('Select Contacts', (contact) => {
                this.setState({ contacts: [contact] });
            }, true),
        );
    };

    showExampleLightbox = () => {
        this.props.navigator.showLightBox(routes.exampleLightbox());
    };

    openWebModal = () => {
        routes.openWebModal('https://www.google.com', 'Google');
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

    render() {
        const { uri } = this.state;
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

                            <ListItem index={1} onPress={() => this.props.navigator.push(routes.aboutScreen())}>
                                <Text>About</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={1} onPress={this.showExampleLightbox}>
                                <Text>Example Lightbox</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem
                              index={1} onPress={() => this.props.navigator.push({
                                  screen: '/examples/interactive',
                                  title: 'Interactive examples',
                                  backButtonTitle: 'Home',
                                  navigatorStyle: global.navbarStyle,
                              })}
                            >
                                <Text>Interactive examples</Text>
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
                            <ListItem index={10} onPress={this.subscribeToLink}>
                                <Text style={[Styles.anchor]}>Subscribe to branch link</Text>
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


                        </ScrollView>
                    </Flex>
                </Fade>
            </Flex>
        );
    }
};

HomePage.propTypes = {};


module.exports = HomePage;
