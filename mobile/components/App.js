import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import NavBar from './navbars/NavbarDefault';
import FireAuth from '../common/fire-auth';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    onLogin = (user, profile) => {
        this.refs.navigator.replace({
            id: 'loggedIn',
            title: 'Welcome',
            user,
            profile
        });
    }

    onUserChange = (user, profile) => {
        this.setState({user, profile});
    }

    onLogout = () => {
        this.refs.navigator.replace({
            id: 'login',
            title: 'Login'
        });
    }

    onEmailVerified = () => {
        alert("Verified")
    }

    componentDidMount () {
        firebase.initializeApp(Project.firebase);
        FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, this.onEmailVerified);

        AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    }

    _handleAppStateChange (currentAppState) {
        if (currentAppState == 'active') {

        }
    }

    renderScene (route) {
        switch (route.id) {
            case 'loading': {
                return <Flex><Loader/></Flex>
            }
            case 'loggedIn': {
                return <Flex>
                    <LoggedIn profile={route.profile} user={route.user}/>
                </Flex>
            }
            case 'login': {
                return <LoginForm/>
            }
        }
    }

    render () {
        return <Navigator
            navigationBar={<Navigator.NavigationBar
                style={Styles.navBar}
                routeMapper={NavBar()}
            />}
            sceneStyle={[Styles.navContent, Styles.body]}
            ref="navigator"
            initialRoute={{ id: 'loading', title: 'Loading' }}
            renderScene={this.renderScene.bind(this)}
        />
    }
};