import InfiniteScrollExample from './InfiniteScrollExample';
import ExampleModal from './ExampleModal';
import PushExample from './PushExample';
import DigitsExample from './DigitsExample';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            firstName: 'kyle',
            lastName: 'Johnson',
            email: "Kyle@solidstategroup.com",
            password: "test12345"
        };
        firebase.initializeApp(Project.firebase);
        FireAuth.init({iosClientId: Project.google.iosClientId});
        FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, this.onEmailVerified, this.onError);
    }

	onLogin = (user, profile) => {
		console.log('logged in');
        this.setState({
            isLoading: false,
            user,
            profile
        });
    }

    onUserChange = (user, profile) => {
        this.setState({
            user,
            profile
        });
    }

    onLogout = () => {
        this.setState({
            isLoading: false,
            user: null,
            profile: null
        });
    }

    onUserChange = (user, profile) => {
        alert(profile);
    };

    onEmailVerified = () => {
        alert('Welcome Thanks for verifying your email');
    };

    onError = (err) => {
        alert(typeof err == 'object' ? JSON.stringify(err) : err);
    };

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
                            {!this.state.profile ? (
							<View>
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
                                <Button onPress={this.facebook.bind(this) } style={[Styles.buttonFacebook, Styles.buttonWithIcon]}>
                                    <ION style={[Styles.buttonText,Styles.buttonIcon]} name="ios-menu"/>
                                    <Text style={Styles.buttonText} >Facebook</Text>
                                </Button>
                                <Button onPress={this.google.bind(this) } style={Styles.buttonGoogle}>
                                    <Text style={Styles.buttonText}>Google</Text>
                                </Button>
                                <Button onPress={this.google.bind(this) } style={Styles.buttonPrimary}>
                                    <Text style={Styles.text}>Purchase Item</Text>
                                    <Text style={Styles.buttonSup}>(£25.00)</Text>
                                </Button>
							</View></View>) : (
								<Button onClick={FireAuth.logout}>
									Logout
								</Button>
							)}
                        </Flex>
                    </ScrollView>
                    <ScrollView style={Styles.container} tabLabel={"Examples"}>

                        <FormGroup width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                            <Card>
                                <FormGroup>
                                    <Button onPress={()=>openModal(<ExampleModal/>)}>Open Modal</Button>
                                </FormGroup>
                                <FormGroup>
                                    <Button onPress={()=>openModal(<WebModal uri="https://google.com"/>)}>Open Web
                                        Modal</Button>
                                </FormGroup>
                            </Card>
                        </FormGroup>
                        <FormGroup width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                            <Card>
                                <Text style={Styles.label}>Masked Date</Text>
                                <TextInput value={this.state.maskedDate}
                                           onChangeText={(text) => this.setState({ maskedDate: text }) }
                                           placeholder="dd/yy" mask="11/11" style={Styles.textInput}/>
                                <Text style={Styles.label}>Masked Time</Text>
                                <TextInput value={this.state.maskedTime}
                                           onChangeText={(text) => this.setState({ maskedTime: text }) }
                                           placeholder="hh:mm am" mask="11:11 am" style={Styles.textInput}/>

                            </Card>
                        </FormGroup>
                        <FormGroup width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                            <Card>
                                <Text style={Styles.label}>Twitter Digits</Text>
                                <DigitsExample/>
                            </Card>
                        </FormGroup>
                    </ScrollView>
                    <Flex tabLabel={"Notifications"}>
                        <PushExample/>
                    </Flex>
                </ScrollableTabView>
            </Flex>
        );
    }
};
