import React, {Component, PropTypes} from 'react';
import Popover from '../components/base/Popover';
import AccountStore from '../common/stores/account-store';
export default class App extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired
    };


    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    onLogin = () => {
        const { redirect } = this.props.location.query;
        this.context.router.push(redirect ? redirect : window.loginRedirect);
    };

    onLogout = () => {
        this.context.router.replace(window.logoutRedirect);
    };

    onNoUser = () => { //User not found in firebase local storage

    };

    render() {
        return (
            <div>
                <AccountProvider onNoUser={this.onNoUser} onLogout={this.onLogout} onLogin={this.onLogin}>
                    {({ isLoading, user }) => (
                        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link className="navbar-brand" to={user ? window.loginRedirect : ""}>Plasma data platform</Link>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">


                                    {/*<li className="nav-item">*/}
                                        {/*<Link activeClassName="active" className="nav-link" to="404">Example*/}
                                        {/*404</Link>*/}
                                    {/*</li>*/}

                                </ul>

                            </div>
                        </nav>
                    )}
                </AccountProvider>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {};
