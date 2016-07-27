/**
 * Created by kylejohnson on 24/07/2016.
 */

import LoginForm from './auth/LoginRegisterForm';
import ForgotPassword from './auth/ForgotPassword';
import ChangePassword from './auth/ChangePassword';
import UpdateProfile from './auth/UpdateProfile';
const FireAuth = require('../../common/fire-auth');

module.exports = class extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = { isLoading: true };
    }

    componentWillMount () {
        firebase.initializeApp(Project.firebase);
        FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, ()=>{
         alert("Email verified!");
        }, this.onError);
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
                        <div className="btn-group">
                            <button disabled={this.state.isLoading} onClick={FireAuth.facebookLogin} className="btn">
                                Facebook
                            </button>
                            <button disabled={this.state.isLoading} onClick={FireAuth.googleLogin} className="btn">
                                Google
                            </button>
                        </div>
                        <Divider/>
                        <LoginForm onRegister={(email, password)=> FireAuth.register(email, password)}
                                   onLogin={(email, password)=> FireAuth.login(email, password)}/>
                        <Divider/>
                        <a onClick={this.showForgotPassword} href="#">Forgot password ?</a>
                    </div>
                ) : (
                    <div>
                        {!this.state.profile.emailVerified && (
                            <div>
                                <button onClick={FireAuth.resendVerification} className="btn">
                                    Resend Verification Email
                                </button>
                            </div>
                        )}
                        { //todo: check if can set password
                            <button onClick={this.showChangePassword} className="btn">
                                Change Password
                            </button>
                        }

                        <UpdateProfile onSubmit={this.onProfileUpdated} {... this.state.profile}/>

                        <button onClick={FireAuth.logout} className="btn">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        );
    }
};