import InfiniteScrollExample from './InfiniteScrollExample';
import ExampleModal from './ExampleModal';
import CrashExample from './CrashExample';
import PushExample from './PushExample';
import DigitsExample from './DigitsExample';

module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: 'kyle',
            lastName: 'Johnson',
            email: "Kyle@solidstategroup.com",
            password: "test12345"
        };
        firebase.initializeApp(Project.firebase);
        FireAuth.init({ iosClientId: Project.google.iosClientId });
        FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, this.onEmailVerified, this.onError);
    }

    onLogin = (user, profile) => {
        console.log('logged in');
        this.setState({
            isLoading: false,
            user,
            profile
        });
    };

    onUserChange = (user, profile) => {
        this.setState({
            user,
            profile
        });
    };

    onLogout = () => {
        this.setState({
            isLoading: false,
            user: null,
            profile: null
        });
    };

    onUserChange = (user, profile) => {
        alert(profile);
    };

    onEmailVerified = () => {
        alert('Welcome Thanks for verifying your email');
    };

    onError = (err) => {
        alert(typeof err == 'object' ? JSON.stringify(err) : err);
    };

    register() {
        const { email, password, firstName, lastName } = this.state;
        FireAuth.register(email, password, { firstName, lastName });
    }

    login() {
        const { email, password } = this.state;
        FireAuth.login(email, password);
    }

    facebook() {
        FireAuth.facebookLogin();
    }

    google() {
        FireAuth.googleLogin();
    }

    navigate = () => {
        this.props.navigation.navigate('Other', { name: 'Lucy' })
    };

    render() {
        return (
            <Flex style={Styles.body}>
                <ScrollableTabView   {...Constants.defaultTabStyles}>
                    <Flex tabLabel={"Auth"}>
                        {!this.state.profile ? (
                                <KeyboardAvoidingScrollView extraScrollHeight={54} style={{ flex: 1 }}>
                                    <Flex style={Styles.centeredContainer}>
                                        <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                            <View style={Styles.formGroup}>
                                                <TextInput value={this.state.email}
                                                           onChangeText={(text) => this.setState({ email: text }) }
                                                           placeholder="Email" style={Styles.textInput}/>
                                                <TextInput value={this.state.password}
                                                           onChangeText={(text) => this.setState({ password: text }) }
                                                           placeholder="Password" secureTextEntry={true}
                                                           style={Styles.textInput}/>
                                            </View>
                                            <Button onPress={this.login.bind(this) }
                                                    style={[Styles.button, Styles.buttonPrimary]}>
                                                <Text style={Styles.buttonTextLight}>
                                                    {'login'.toUpperCase()}
                                                </Text>
                                            </Button>

                                            <H1>OR Register</H1>
                                            <View>
                                                <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                                    <View style={Styles.formGroup}>

                                                        <TextInput value={this.state.firstName}
                                                                   onChangeText={(text) => this.setState({ firstName: text }) }
                                                                   placeholder="First name"
                                                                   secureTextEntry={true} style={Styles.textInput}/>
                                                        <TextInput value={this.state.lastName}
                                                                   onChangeText={(text) => this.setState({ lastName: text }) }
                                                                   placeholder="Last name" secureTextEntry={true}
                                                                   style={Styles.textInput}/>
                                                        <TextInput value={this.state.email}
                                                                   onChangeText={(text) => this.setState({ email: text }) }
                                                                   placeholder="Email" style={Styles.textInput}/>
                                                        <TextInput value={this.state.password}
                                                                   onChangeText={(text) => this.setState({ password: text }) }
                                                                   placeholder="Password" secureTextEntry={true}
                                                                   style={Styles.textInput}/>
                                                    </View>
                                                    <Button onPress={this.register.bind(this) }
                                                            style={Styles.buttonPrimary}>
                                                        <Text style={Styles.buttonTextLight}>
                                                            Register
                                                        </Text>
                                                    </Button>
                                                </View>
                                                <View><H1>Or</H1></View>
                                                    <FormGroup>
                                                        <Button onPress={this.facebook.bind(this) }
                                                                style={[Styles.buttonFacebook, Styles.buttonWithIcon]}>
                                                            <ION style={[Styles.buttonText, Styles.buttonIcon]}
                                                                 name="logo-facebook"/>
                                                            <Text style={Styles.buttonText}>Facebook</Text>
                                                        </Button>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Button onPress={this.google.bind(this) } style={Styles.buttonGoogle}>
                                                            <Text style={Styles.buttonText}>Google</Text>
                                                             <Text style={Styles.buttonSup}>Alt text</Text>
                                                        </Button>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <DigitsExample/>
                                                    </FormGroup>
                                                </View>
                                        </View>
                                    </Flex>
                                </KeyboardAvoidingScrollView>
                            ) : (
                                <Button onClick={FireAuth.logout}>
                                    Logout
                                </Button>
                            )}

                    </Flex>
                    <Flex style={Styles.container} tabLabel={"Examples"}>
                        <KeyboardAvoidingScrollView extraScrollHeight={54} style={{ flex: 1 }}>

                            <Card>
                                <View style={[Styles.listContainer, Styles.noBackground]}>
                                    <ListItem onPress={this.navigate} style={Styles.listItem}>
                                        <Text style={Styles.listItemTitle}>List Item Title</Text>
                                    </ListItem>
                                    <ListItem onPress={this.navigate} style={Styles.listItem}>
                                        <Text style={Styles.listItemText}>List Item</Text>
                                        <ION name="ios-arrow-forward" style={[Styles.listIcon, Styles.listActionIcon]}/>
                                    </ListItem>
                                    <ListItem onPress={this.navigate} style={Styles.listHeader}>
                                        <Text style={[Styles.listHeaderText, Styles.bold]}>List Items Header</Text>
                                    </ListItem>
                                    <ListItem onPress={this.navigate} style={Styles.listItem}>
                                        <ION name="ios-american-football" style={Styles.listIcon}/>
                                        <Text style={Styles.listItemText}>List Item</Text>
                                    </ListItem>
                                    <ListItem onPress={this.navigate} style={[Styles.listItem, Styles.listItemLast]}>
                                        <ION name="ios-american-football" style={Styles.listIcon}/>
                                        <Text style={Styles.listItemText}>List Item</Text>
                                        <ION name="ios-arrow-forward" style={[Styles.listIcon, Styles.listActionIcon]}/>
                                    </ListItem>
                                </View>
                            </Card>

                            <FormGroup>
                                <PushExample/>
                            </FormGroup>
                            <FormGroup width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                <Card>
                                    <FormGroup>
                                        <Button onPress={() => openModal(<ExampleModal/>)}>Open Modal</Button>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button onPress={() => openModal(<WebModal uri="https://google.com"/>)}>Open Web
                                            Modal</Button>
                                    </FormGroup>
                                </Card>
                            </FormGroup>
                            <FormGroup width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
                                <Card style={Styles.container}>
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

                            <FormGroup>
                                <Card>
                                    <Text style={Styles.label}>Single Select</Text>
                                    <Select data={[1, 2, 3, 4, 5]}
                                            value={this.state.selectVal}
                                            onChange={(selectVal) => this.setState({ selectVal })}
                                            renderRow={(item, isSelected, toggleItem) => (
                                                <ListItem
                                                    key={item}
                                                    style={Styles.listItem}
                                                    onPress={toggleItem}><Text>{isSelected ? 'Unselect me' : 'Select me'}</Text></ListItem>
                                            )}/>
                                </Card>
                            </FormGroup>

                            <FormGroup>
                                <Card>
                                    <Text style={Styles.label}>Includes optional filter and multiselect</Text>
                                    <Select data={["Alpha", "Beta"]}
                                            placeholder="Search items"
                                            filterItem={(option, search) => option.toLowerCase().indexOf(search) !== -1}
                                            multiple={true}
                                            value={this.state.multiSelectVal}
                                            onChange={(multiSelectVal) => this.setState({ multiSelectVal })}
                                            renderRow={(item, isSelected, toggleItem) => (
                                                <ListItem
                                                    key={item}
                                                    style={Styles.listItem}
                                                    onPress={toggleItem}><Text
                                                    style={isSelected && { fontWeight: 'bold' }}>{item}</Text></ListItem>
                                            )}/>

                                    <Button onPress={() => openSelect(
                                        <ModalSelect
                                            title="Select a thing"
                                            data={["Alpha", "Beta"]}
                                            placeholder="Search items"
                                            filterItem={(option, search) => option.toLowerCase().indexOf(search) !== -1}
                                            value={this.state.multiSelectVal}
                                            multiple={true}
                                            onChange={(multiSelectVal) => this.setState({ multiSelectVal })}
                                            renderRow={(item, isSelected, toggleItem) => (
                                                <ListItem
                                                    key={item}
                                                    style={Styles.listItem}
                                                    onPress={toggleItem}><Text
                                                    style={isSelected && { fontWeight: 'bold' }}>{item}</Text></ListItem>
                                            )}/>
                                    )}>
                                        Launch this in modal
                                    </Button>
                                </Card>
                            </FormGroup>
                        </KeyboardAvoidingScrollView>
                    </Flex>
                    <Flex tabLabel={"Crashlytics"}>
                        <CrashExample/>
                    </Flex>
                </ScrollableTabView>
            </Flex>
        );
    }
};
