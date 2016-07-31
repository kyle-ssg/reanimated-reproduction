import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import NavBar from '../../navbars/NavbarDefault';
import FireAuth from '../../../common/fire-auth';
import Push from '../../../apis/push';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = { push: new Push(this.onNotification) };
        this.state.push.configure();
    }

    onNotification = () => {
        console.log('notification')
    }

    onLogin = (user, profile) => {
        this.setState({ user, profile }, ()=> {
            this.refs.navigator.replace({
                id: 'loggedIn',
                title: 'Welcome'
            });
        })
    }

    onUserChange = (user, profile) => {
        this.setState({ user, profile });
    }

    onLogout = () => {
        this.refs.navigator.replace({
            id: 'login',
            title: 'Login'
        });
    }

    onEmailVerified = () => {
        this.state.push.sendLocal('Welcome', 'Thanks for verifying your email');
    }

    onError = (err) => {
        alert(err);
    }

    componentDidMount () {
        firebase.initializeApp(Project.firebase);
        FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, this.onEmailVerified.bind(this), this.onError);
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
                    <LoggedIn profile={this.state.profile} user={this.state.user}/>
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