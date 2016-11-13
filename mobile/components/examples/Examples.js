import InfiniteScrollExample from './InfiniteScrollExample';
import ExampleModal from './ExampleModal';
import PushExample from './PushExample';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            firstName: 'kyle',
            lastName: 'Johnson',
            email: "Kyle@solidstategroup.com",
            password: "test12345"
        };
    }

    register () {
        const { email, password, firstName, lastName } = this.state;
        FireAuth.register(email, password, { firstName, lastName });
    }

    login () {
        const { email, password } = this.state;
        FireAuth.login(email, password);
    }

    facebook () {
        FireAuth.facebookLogin();
    }

    google () {
        FireAuth.googleLogin();
    }

    render () {
        return (
            <Flex style={Styles.body}>
                <ScrollableTabView   {...Constants.defaultTabStyles}>
                    <Flex style={Styles.centeredContainer} tabLabel={"Login"}>
                        <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                            <View style={Styles.formGroup}>
                                <TextInput value={this.state.email}
                                           onChangeText={(text) => this.setState({ email: text }) }
                                           placeholder="Email" style={Styles.textInput}/>
                                <TextInput value={this.state.password}
                                           onChangeText={(text) => this.setState({ password: text }) }
                                           placeholder="Password" secureTextEntry={true} style={Styles.textInput}/>
                            </View>
                            <Button onPress={this.login.bind(this) } style={[Styles.button, Styles.buttonPrimary]}>
                                <Text style={Styles.buttonTextLight}>
                                    Login
                                </Text>
                            </Button>
                        </View>
                    </Flex>
                    <ScrollView tabLabel={"Register"}>
                        <Flex style={Styles.container}>
                            <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                <View style={Styles.formGroup}>
                                    <TextInput value={this.state.firstName}
                                               onChangeText={(text) => this.setState({ firstName: text }) }
                                               placeholder="First name"
                                               secureTextEntry={true} style={Styles.textInput}/>
                                    <TextInput value={this.state.lastName}
                                               onChangeText={(text) => this.setState({ lastName: text }) }
                                               placeholder="Last name" secureTextEntry={true} style={Styles.textInput}/>
                                    <TextInput value={this.state.email}
                                               onChangeText={(text) => this.setState({ email: text }) }
                                               placeholder="Email" style={Styles.textInput}/>
                                    <TextInput value={this.state.password}
                                               onChangeText={(text) => this.setState({ password: text }) }
                                               placeholder="Password" secureTextEntry={true} style={Styles.textInput}/>
                                </View>
                                <Button onPress={this.register.bind(this) } style={Styles.buttonPrimary}>
                                    <Text style={Styles.buttonTextLight}>
                                        Register
                                    </Text>
                                </Button>
                            </View>
                            <View><H1>Or</H1></View>
                            <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                <Button onPress={this.facebook.bind(this) } style={Styles.buttonFacebook}>
                                    Facebook
                                </Button>
                                <Button onPress={this.google.bind(this) } style={Styles.buttonGoogle}>
                                    Google
                                </Button>
                            </View>
                        </Flex>
                    </ScrollView>
                    <Flex style={Styles.container} tabLabel={"Examples"}>
                        <FormGroup>
                            <Button onPress={()=>openModal(<ExampleModal/>)}>Open Modal</Button>
                        </FormGroup>
                        <FormGroup>
                            <Button onPress={()=>openModal(<WebModal uri="https://google.com"/>)}>Open Web
                                Modal</Button>
                        </FormGroup>

                        <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                            <View style={Styles.formGroup}>
                                <Text style={Styles.label}>Masked Date</Text>
                                <TextInput value={this.state.maskedDate}
                                           onChangeText={(text) => this.setState({ maskedDate: text }) }
                                           placeholder="dd/yy" mask="11/11" style={Styles.textInput}/>
                                <Text style={Styles.label}>Masked Time</Text>
                                <TextInput value={this.state.maskedTime}
                                           onChangeText={(text) => this.setState({ maskedTime: text }) }
                                           placeholder="hh:mm am" mask="11:11 am" style={Styles.textInput}/>

                            </View>
                        </View>
                        <Text style={Styles.label}>Infinite Scroll</Text>
                        <InfiniteScrollExample/>
                    </Flex>
                    <Flex tabLabel={"Notifications"}>
                        <PushExample/>
                    </Flex>
                </ScrollableTabView>
            </Flex>
        );
    }
};
