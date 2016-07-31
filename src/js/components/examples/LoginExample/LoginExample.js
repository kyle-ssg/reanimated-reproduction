/**
 * Created by kylejohnson on 24/07/2016.
 */

import LoginForm from './LoginRegisterForm';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile';
const FireAuth = require('../../../common/fire-auth');

module.exports = class extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = { isLoading: true };
    }

    componentWillMount () {
        firebase.initializeApp(Project.firebase);
        FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, ()=> {
            alert("Email verified!");
        }, this.onError);
    }

    onError = (err) => {
        alert(err);
    }

    onLogin = (user, profile) => {
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

    showForgotPassword = () => {
        openModal((
            <ForgotPassword onSubmit={()=>closeModal()}/>
        ), <h3>Enter an email</h3>);
    }

    showChangePassword = () => {
        openModal((
            <ChangePassword onSubmit={()=>closeModal()}/>
        ), <h3>Enter an email</h3>);
    }

    render () {
        return (
            <div>
                <h1>Simple Login Example</h1>
                {!this.state.profile ? (
                    <div>
                        <FormInline>
                            <Button disabled={this.state.isLoading} onClick={FireAuth.facebookLogin}>
                                Facebook
                            </Button>
                            <Button disabled={this.state.isLoading} onClick={FireAuth.googleLogin}>
                                Google
                            </Button>
                        </FormInline>
                        <Divider/>
                        <LoginForm onRegister={(email, password)=> FireAuth.register(email, password)}
                                   onLogin={(email, password)=> FireAuth.login(email, password)}/>
                        <Divider/>
                        <Button onClick={this.showForgotPassword} className="btn-link">Forgot password ?</Button>
                    </div>
                ) : (
                    <div>
                        {!this.state.profile.emailVerified && (
                            <div>
                                <Button onClick={FireAuth.resendVerification}>
                                    Resend Verification Email
                                </Button>
                            </div>
                        )}
                        { //todo: check if can set password
                            <Button onClick={this.showChangePassword}>
                                Change Password
                            </Button>
                        }

                        <UpdateProfile onSubmit={this.onProfileUpdated} {... this.state.profile}/>

                        <Button onClick={FireAuth.logout}>
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        );
    }
};