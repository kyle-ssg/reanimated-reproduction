import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import NavBar from './navbars/NavbarDefault';
import FCM from 'react-native-fcm';

module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {

        AppState.addEventListener('change', this._handleAppStateChange.bind(this));

        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {


                FCM.requestPermissions(); // for iOS
                FCM.getFCMToken().then(token => {
                    if (token) {
                        var ref = firebase.database().ref(`profiles/${user.uid}/tokens`),
                            obj = {};
                        obj[token] = true;
                        ref.update(obj);
                    }
                });

                var profileRef = firebase.database().ref(`profiles/${user.uid}`);
                profileRef.update({emailVerified: user.emailVerified, email:user.email });
                profileRef.on('value', (profile)=>{
                    const val = profile.val();
                    this.setState({profile:val}, ()=>{
                        if (!this.user) {
                            this.refs.navigator.push({
                                id: 'loggedIn',
                                title: 'Welcome',
                                user: user
                            });
                        } else if(val) {

                        }
                        this.user = user;
                    })
                })

            } else { // User is signed in.
                this.user = null;
                this.refs.navigator.push({
                    id: 'login',
                    title: 'Please login'
                });
            }
        });
    }
    _handleAppStateChange(currentAppState) {
        console.log(this.user);
        console.log(firebase.auth().currentUser);
        if (currentAppState == 'active') {
        
    }

    renderScene(route) {
        switch (route.id) {
            case 'loading':
            {
                return <Flex><Loader/></Flex>
            }
            case 'loggedIn':
            {
                return <Flex>
                    <LoggedIn profile={this.state.profile} user={route.user}/>
                </Flex>
            }
            case 'login':
            {
                return <LoginForm/>
            }
        }
    }

    render() {
        return <Navigator
            navigationBar={<Navigator.NavigationBar
                                                        style = {Styles.navBar}
                                                        routeMapper={NavBar()}
                                                      />}
            sceneStyle={[Styles.navContent, Styles.body]}
            ref="navigator"
            initialRoute={{id:'loading', title:'Loading'}}
            renderScene={this.renderScene.bind(this)}
        />
    }
};