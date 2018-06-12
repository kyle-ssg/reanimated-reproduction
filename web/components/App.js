import React, {Component, PropTypes} from 'react';

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

    };

    onLogout = () => {
        this.context.router.replace('/');
    };

    render() {
        const redirect = this.props.location.query.redirect ? `?redirect=${this.props.location.query.redirect}` : "";

        return (
            <div>
                <nav className={"navbar navbar-fixed-top navbar-light"}>
                    <ul className="nav justify-content-start">
                        <li className={"nav-item"}>
                            <Link to={"/example/sass"} className={"nav-link"}>
                                Hi
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/example/sass"} className={"nav-link"}>
                                Hi
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className={"nav-item"}>
                            <Link to={"/example/sass"} className={"nav-link"}>
                                Hi
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/example/sass"} className={"nav-link"}>
                                Hi
                            </Link>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    location: RequiredObject,
    history: RequiredObject,
};
