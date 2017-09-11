import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    completion (error, response) { //Handle twitters callback
        if (error && error.code !== 1) {
            this.setState({ logged: false, error: true, response: {} });
        } else if (response) {
            alert(response)
        }
    }

    render () {
        return (
            <View>
                <DigitsLoginButton
                    options={{
                        title: "Sign up",
                        phoneNumber: "+44",
                        appearance: {
                            accentColor: {
                                hex: '#000000',
                                alpha: 1
                            },
                            headerFont: {
                                name: "Times",
                            },
                            labelFont: {
                                name: "Times",
                            },
                            bodyFont: {
                                name: "Times",
                                size: 16
                            }
                        }
                    }}
                    completion={this.completion.bind(this)}
                    text="Login With Phone Number"
                    buttonStyle={[Styles.button,Styles.buttonPrimary, Styles.centeredContainer]}
                    style={Styles.alignCenter}
                    textStyle={Styles.buttonText}
                />
            </View>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;