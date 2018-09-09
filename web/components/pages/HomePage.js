import React from "react";

export default hot(module)(class extends React.Component {
    static contextTypes = {
        router: propTypes.object.isRequired
    };

    componentDidMount() {
        API.trackPage(Constants.pages.HOME_PAGE);
    }

    render = () => {
        return (
            <div className="app-container container">
                <AccountProvider onLogout={this.onLogout} onLogin={this.onLogin}>
                    {() => (
                        <div>
                            <h1>
                                Home
                            </h1>
                        </div>
                    )}
                </AccountProvider>
            </div>
        );
    }
});
