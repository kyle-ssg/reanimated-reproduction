/**
 * Created by kylejohnson on 06/10/15.
 */
module.exports = Component({
    getInitialState: function() {
        return {
            keyboardOffset: new Animated.Value(0)
        }
    },

    componentDidMount: function() {
        this._keyboardWillShowSubscription = DeviceEventEmitter.addListener('keyboardWillShow', (e) => this._keyboardWillShow(e));
        this._keyboardWillHideSubscription = DeviceEventEmitter.addListener('keyboardWillHide', (e) => this._keyboardWillHide(e));
    },

    componentWillUnmount() {
        if (this._keyboardWillShowSubscription) {
            this._keyboardWillShowSubscription.remove();
            this._keyboardWillHideSubscription.remove();
        }
    },

    _keyboardWillShow(e) {
        Animated.timing(this.state.keyboardOffset, {
            toValue: e.endCoordinates.height - (this.props.offset  || 0),
            duration: 250
        }).start();
    },

    _keyboardWillHide(e) {
        Animated.timing(this.state.keyboardOffset, {
            toValue: 0,
            duration: 250
        }).start();
    },
    render: function() {
        return <Flex>
            <Flex style={this.props.style}>{this.props.children}</Flex>

            <Animated.View style={[{height: this.state.keyboardOffset}]}>

            </Animated.View>
        </Flex>
    }
})