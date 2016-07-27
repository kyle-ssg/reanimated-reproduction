module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: 'kyle',
            lastName: 'Johnson',
            email: "Kyle@solidstategroup.com",
            password: "test12345"
        };
    }

    register() {
        const { email, password, firstName } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=> {
                user.updateProfile({
                    displayName: firstName
                }).then((res)=> {
                    user.sendEmailVerification();
                })
            })
            .catch((res)=> {
                alert(res.message)
            })
    }

    login() {
        const { email, password, firstName, lastName } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=> {

            })
            .catch((res)=> {
                alert(res.message)
            })
    }

    facebook() {
        const { email, password, firstName } = this.state;
        Auth.Facebook.login((token)=> {
             firebase.auth()
                 .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token));
        })
    }

    render() {
        return (
            <ScrollableTabView {... Constants.defaultTabStyles}>
                <Flex style={Styles.centeredContainer} tabLabel={"Login"}>
                    <View width={DeviceWidth - styleVariables.marginBaseHorizontal*2}>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.email} onChangeText={(text)=>this.setState({email:text})}
                                       placeholder="Email"/>
                        </View>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.password} onChangeText={(text)=>this.setState({password:text})}
                                       placeholder="Password" secureTextEntry={true}/>
                        </View>
                        <Button onPress={this.login.bind(this)}>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </View>
                </Flex>
                <Flex style={Styles.centeredContainer} tabLabel={"Register"}>
                    <View width={DeviceWidth - styleVariables.marginBaseHorizontal*2}>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.firstName}
                                       onChangeText={(text)=>this.setState({firstName:text})} placeholder="First name"
                                       secureTextEntry={true}/>
                        </View>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.lastName} onChangeText={(text)=>this.setState({lastName:text})}
                                       placeholder="Last name" secureTextEntry={true}/>
                        </View>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.email} onChangeText={(text)=>this.setState({email:text})}
                                       placeholder="Email"/>
                        </View>
                        <View style={Styles.formGroup}>
                            <TextInput value={this.state.password} onChangeText={(text)=>this.setState({password:text})}
                                       placeholder="Password" secureTextEntry={true}/>
                        </View>
                        <Button onPress={this.register.bind(this)}>
                            <Text>
                                Register
                            </Text>
                        </Button>
                    </View>
                    <View><H1>Or</H1></View>
                    <Button onPress={this.facebook.bind(this)}><Text>Facebook</Text></Button>
                </Flex>
            </ScrollableTabView>
        )
    }
};