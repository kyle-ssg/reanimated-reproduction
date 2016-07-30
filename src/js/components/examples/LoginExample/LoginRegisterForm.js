/**
 * Created by kylejohnson on 25/07/2016.
 */
const TheComponent = class extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    login = () => {
        this.props.onLogin(this.state.email, this.state.password);
    }

    register = () => {
        this.props.onRegister(this.state.email, this.state.password);
    }

    toggleLogin = () => {
        this.setState({showLogin: !this.state.showLogin});
    }

    render () {
        return this.state.showLogin ? (
            <div>
                <FormGroup
                    title="Email"
                    placeholder="email" type="email"
                    onChange={(e)=>this.setState({ email: Utils.safeParseEventValue(e) })}/>

                <FormGroup title="Password"
                           placeholder="password" type="password"
                           onChange={(e)=>this.setState({ password: Utils.safeParseEventValue(e) })}/>

                <button onClick={this.login}>Login</button>
                <a href="#" onClick={this.toggleLogin}>Already a member ? </a>
            </div>
        ) : (
            <div>
                <FormGroup
                    title="Email"
                    placeholder="email" type="email"
                    onChange={(e)=>this.setState({ email: Utils.safeParseEventValue(e) })}/>

                <FormGroup title="Password"
                           placeholder="password" type="password"
                           onChange={(e)=>this.setState({ password: Utils.safeParseEventValue(e) })}/>

                <button onClick={this.register}>Register</button>

                <a href="#" onClick={this.toggleLogin}>New user ? </a>
            </div>
        );
    }
};

TheComponent.propTypes = {
    onLogin: RequiredFunc,
    onRegister: RequiredFunc
};

module.exports = TheComponent;