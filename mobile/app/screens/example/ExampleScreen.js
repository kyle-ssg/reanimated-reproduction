/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import AccountStore from "../../../common-mobile/stores/account-store";

const HomePage = class extends Component {
    static navigatorStyle = global.navbarStyle;

    displayName: 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
        ES6Component(this);
        routeHelper.handleNavEvent(props.navigator, 'home', this.onNavigatorEvent);
        this.initPush(true);
    }

    componentDidMount() {
        this.listenTo(AccountStore, 'change', () => this.forceUpdate());
        API.push.getInitialNotification()
            .then((e) => {
                e && this.onNotification(Object.assign({}, e, {fromClick: true}));
            })
    }

    onNavigatorEvent = (event) => {
        if (event.id == routeHelper.navEvents.SHOW) {
            this.props.navigator.setDrawerEnabled({side: 'right', enabled: true});
            API.trackPage('Home Screen');
        } else if (event.id == routeHelper.navEvents.HIDE) {
            this.props.navigator.setDrawerEnabled({side: 'right', enabled: false});
        }
    };


    render() {
        const {uri} = this.state;
        return (
            <Flex testID="example-screen">
                <Fade value={1} style={[{flex: 1}, Styles.body]} autostart={true}>
                    <Flex>
                        <ScrollView keyboardShouldPersistTaps={"handled"}>
                            <Row>
                                <Flex value={1}>
                                    <Container>
                                        <FormGroup>
                                            <TextInput placeholder={"Example input"}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <TextInput placeholder={"Example input"}/>
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


                            <ListItem index={0} icon={<ION name="ios-notifications"
                                                           style={[Styles.listIcon, {color: pallette.secondary}]}/>}>
                                <Text>Register for Push</Text>
                                <ReactNative.Switch value={this.state.token ? true : false}
                                                    onChange={this.registerPush}/>
                            </ListItem>

                            <ListItem index={1} onPress={() => routeHelper.goAbout(this.props.navigator)}>
                                <Text>About</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={1} onPress={this.showExampleLightbox}>
                                <Text>Example Lightbox</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={1} onPress={() => this.props.navigator.push({
                                screen: '/examples/interactive',
                                title: "Interactive examples",
                                backButtonTitle: "Home",
                                navigatorStyle: global.navbarStyle
                            })}>
                                <Text>Interactive examples</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={2} onPress={this.showUpload}>
                                <Text>Show Upload</Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>

                            <ListItem index={3} onPress={this.selectContact}>
                                <Text>
                                    Select Contact{' '}
                                    {this.state.contacts &&
                                    <Text>
                                        ({_.map(this.state.contacts, 'givenName').join(',')})
                                    </Text>
                                    }
                                </Text>
                                <ION name="ios-arrow-forward" style={[Styles.listIconNav]}/>
                            </ListItem>
                            <ListItem index={4} onPress={this.selectMultipleContacts}>
                                <Text>Select Multiple Contacts{' '}
                                    {this.state.contacts &&
                                    <Text>
                                        ({_.map(this.state.contacts, 'givenName').join(',')})
                                    </Text>
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
                                <Text style={[Styles.anchor, {color: 'red'}]}>Trigger Crashlytics error (this will crash
                                    the app)</Text>
                            </ListItem>

                            <Container>
                                <FormGroup>
                                    {

                                        AccountStore.getUser() ?
                                            <Button onPress={() => routeHelper.logout(this.props.navigator)}>
                                                Logout
                                            </Button>
                                            :
                                            <Button onPress={() => routeHelper.goAccount(this.props.navigator)}>
                                                Login Wall
                                            </Button>
                                    }
                                </FormGroup>
                            </Container>

                            {uri ? <Image style={{height: 100, width: 100}} resizeMode="contain"
                                          source={{uri}}/> : null}


                        </ScrollView>
                    </Flex>
                </Fade>
            </Flex>
        )
    }

    getInitialLink = () => {
        API.getInitialLink(this.onLink);
    }

    subscribeToLink = () => {
        API.onLinkPressed(this.onLink);
    }


    showUpload = () => {
        API.showUpload("Upload a file", false, 100, 100, compressImageQuality = 0.8, () => {
            this.setState({isUploading: true})
        })
            .then((res) => {
                alert(JSON.stringify(res))
            })
    };

    showCamera = () => {
        routeHelper.showCamera(this.props.navigator, null, null, ({path, data}) => {
            this.setState({uri: path, data})
        })
    };

    openSelect = () => {
        routeHelper.openSelect(this.props.navigator, "Select a thing", {
            items: ['item 1', 'item 2'],
            filterItem: (contact, search) => contact.indexOf(search) !== -1,
            onChange: (options) => this.setState({options}),
            renderRow: (item, isSelected, toggleItem) => {
                return (
                    <ListItem onPress={toggleItem}>
                        <Text>{item}</Text>
                        <ION style={[Styles.listIcon]}
                             name={isSelected ? "ios-checkbox" : "ios-checkbox-outline"}/>
                    </ListItem>
                )
            }
        });
    };

    selectContact = () => {
        routeHelper.openContactModal(this.props.navigator, 'Select Contact', (contact) => {
            this.setState({contacts: [contact]})
        });
    };

    selectMultipleContacts = () => {
        routeHelper.openContactModal(this.props.navigator, 'Select Contacts', (contact) => {
            this.setState({contacts: [contact]})
        }, true);
    };

    showExampleLightbox = () => {
        routeHelper.showExampleLightbox(this.props.navigator)
    };

    openWebModal = () => {
        routeHelper.openWebModal('https://www.google.com', 'Google');
    };

    generateLink = () => {
        API.generateLink("SSG Boilerplate", {
            route: {
                screen: "goAbout",
                data: {
                    customData: "bla"
                }
            }
        }, "www.solidstategroup.com")
            .then((branchURL) => {
                this.setState({branchURL})
            })
            .catch((e) => {
                console.log(e);
            })
    }

    registerPush = () => {
        if (this.state.token) {
            this.setState({token: null});
            API.push.unsubscribe('/topics/all')
            API.push.stop();
        }
        else {
            this.initPush(false)
        }

    };

    initPush = (silent) => {
        API.push.init(this.onNotification, silent)
            .then((token) => {
                API.push.subscribe('/topics/all')
                this.setState({token})
            });
    };


    onLink = (notification) => {
        if (notification.route) {
            const route = notification.route;
            routeHelper[route.screen] && routeHelper[route.screen](this.props.navigator, route.data);
        }
    }

    onNotification = (notification) => {
        if (notification.fromClick) {
            if (notification.route) {
                const route = JSON.parse(notification.route);
                routeHelper[route.screen] && routeHelper[route.screen](this.props.navigator, route.data);
            }
        }
    };

    triggerError = () => {
        console.log({}.hell.no)
    };
}

HomePage.propTypes = {};


module.exports = HomePage;
