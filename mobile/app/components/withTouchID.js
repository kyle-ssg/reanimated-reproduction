import TouchID from 'react-native-touch-id';
import React from 'react';

const optionalConfigObject = {
    title: Strings.authenticationRequired, // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: Strings.failed, // Android
    cancelText: Strings.cancel, // Android
    fallbackLabel: Strings.showPasscode, // iOS (if empty, then label is hidden)
    unifiedErrors: true, // use unified error messages (default false)
    passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export default (WrappedComponent) => {
    class HOC extends React.Component {
    static displayName = 'withFoo';

    constructor(props) {
        super(props);
        this.state = {
            touchIdError: false,
        };
    }

    authenticateTouchID = async () => {
        TouchID.authenticate(Strings.authorize, optionalConfigObject)
            .then(() => {
                // Success code
                const { component } = this;
                if (!component.onTouchIDSuccess) {
                    // eslint-disable-next-line
                    alert('Parent component does not implement onTouchIDSuccess');
                } else {
                    component.onTouchIDSuccess();
                }
            })
            .catch(() => {
                this.setState({ touchIdError: true });
            });
    }

        retryAuthenticateTouchID = () => {
            this.setState({ touchIdError: false }, this.checkSupport);
        }

        render() {
            return (
                <WrappedComponent
                  ref={component => this.component = component}
                  {...this.props}
                  {...this.state}
                  retryuthenticateTouchID={this.retryAuthenticateTouchID}
                  authenticateTouchID={this.authenticateTouchID}
                />
            );
        }
    }

    return HOC;
};
