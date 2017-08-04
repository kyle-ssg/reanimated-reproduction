import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
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
                            {/*<Link className="navbar-brand" to={user ? window.loginRedirect : ""}>Brand</Link>*/}

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Uh to={{
                                            pathname: '/account'
                                        }}>Home</Uh>
                                    </li>

                                    <li className="nav-item">
                                        {/*<Link activeClassName="active" className="nav-link" to="404">Example*/}
                                        {/*404</Link>*/}
                                    </li>

                                    {user && (
                                        <li className="nav-item">
                                            {/*<Link activeClassName="active" className="nav-link"*/}
                                            {/*to="sass">Sass</Link>*/}
                                        </li>
                                    )}
                                    {user && (
                                        <li className="nav-item">
                                            {/*<Link activeClassName="active" className="nav-link"*/}
                                            {/*to="layout">Layout</Link>*/}
                                        </li>
                                    )}
                                    {user && (
                                        <li className="flex-column relative nav-link">
                                            <Popover
                                                className="popover-right"
                                                renderTitle={(toggle) => (
                                                    <a onClick={toggle}>
                                                        Virtualized
                                                        <div className="flex-column fa fa-chevron-down"/>
                                                    </a>
                                                )}>
                                                {(toggle) => (
                                                    <div>
                                                        {/*<Link activeClassName="active" className="nav-link" onClick={toggle}*/}
                                                        {/*to="virtualized">Examples</Link>*/}
                                                        {/*<Link activeClassName="active" className="nav-link" onClick={toggle}*/}
                                                        {/*to="infiniteWindowScrollList">Infinite Window Scrolling List</Link>*/}
                                                    </div>
                                                )}
                                            </Popover>

                                        </li>
                                    )}
                                </ul>
                                {user && (
                                    <div className="flex-column relative nav-link">
                                        <Popover className="popover-right"
                                                 renderTitle={(toggle) => (
                                                     <a onClick={toggle}>
                                                         {user.displayName}
                                                         <div className="flex-column fa fa-chevron-down"/>
                                                     </a>
                                                 )}>
                                            {(toggle) => (
                                                <div>
														<span href="test">
													 <a href="#" onClick={FireAuth.logout} to="exampleone">Logout</a>
												</span>
                                                </div>
                                            )}
                                        </Popover>
                                    </div>
                                )}
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
