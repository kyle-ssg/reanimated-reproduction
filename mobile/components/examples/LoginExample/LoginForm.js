import FireAuth from '../../../common/fire-auth';

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
    const {email, password, firstName, lastName} = this.state;
    FireAuth.register(email, password, {firstName, lastName});
  }

  login() {
    const {email, password} = this.state;
    FireAuth.login(email, password)
      .catch((res)=> {
        alert(res.message)
      });
  }

  facebook() {
    FireAuth.facebookLogin();
  }

  render() {
    return (
      <ScrollableTabView {... Constants.defaultTabStyles}>
        <Flex style={Styles.centeredContainer} tabLabel={"Login"}>
          <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email: text })}
                         placeholder="Email"/>
            </View>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.password}
                         onChangeText={(text)=>this.setState({ password: text })}
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
          <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.firstName}
                         onChangeText={(text)=>this.setState({ firstName: text })}
                         placeholder="First name"
                         secureTextEntry={true}/>
            </View>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.lastName}
                         onChangeText={(text)=>this.setState({ lastName: text })}
                         placeholder="Last name" secureTextEntry={true}/>
            </View>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email: text })}
                         placeholder="Email"/>
            </View>
            <View style={Styles.formGroup}>
              <TextInput value={this.state.password}
                         onChangeText={(text)=>this.setState({ password: text })}
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
        <Flex style={Styles.centeredContainer} tabLabel={"Examples"}>
          <View width={DeviceWidth - styleVariables.marginBaseHorizontal * 2}>
            <View style={Styles.formGroup}>
              <Text>Masked Date</Text>
              <TextInput value={this.state.maskedDate} onChangeText={(text)=>this.setState({ maskedDate: text })}
                         placeholder="dd/yy" mask="11/11"/>
            </View>
            <View style={Styles.formGroup}>
              <Text>Masked Time</Text>
              <TextInput value={this.state.maskedTime} onChangeText={(text)=>this.setState({ maskedTime: text })}
                         placeholder="hh:mm am" mask="11:11 am"/>
            </View>
          </View>
        </Flex>
      </ScrollableTabView>
    )
  }
};
