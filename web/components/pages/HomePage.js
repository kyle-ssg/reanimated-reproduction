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
                            <div className="hero">
                                <h1 className="hero__title">Hero text</h1>
                                <img src="https://placehold.it/900x400" className="hero__image img-fluid"/>
                                <div className="hero__text">
                                    <p className="hero__text__intro">Hero text intro</p>
                                    <p className="hero__text__body">Hero text body</p>
                                </div>
                            </div>
                            <div className="hero hero--blue">
                                <h1 className="hero__title">Hero text</h1>
                                <img src="https://placehold.it/900x400" className="hero__image img-fluid"/>
                                <div className="hero__text">
                                    <p className="hero__text__intro">Hero text intro</p>
                                    <p className="hero__text__body">Hero text body</p>
                                </div>
                            </div>
                        </div>
                    )}
                </AccountProvider>
            </div>
        );
    }
});
