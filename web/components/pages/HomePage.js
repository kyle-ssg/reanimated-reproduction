import React from "react";

module.exports = class extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentWillMount() {

    }

    render = () => {
        return (
            <AccountProvider onLogout={this.onLogout} onLogin={this.onLogin}>
                {() => (
                    <div>
                        Home
                    </div>
                )}
            </AccountProvider>
        );
    }
};
