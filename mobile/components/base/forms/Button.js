'use strict';

var Button = Component({
    displayName: 'Button',
    propTypes: {
        onPress: OptionalFunc, //What to do on press
        onPressIn: OptionalFunc, //What to do on press in
        onPressOut: OptionalFunc, //What to do on press out
        onLongPress: OptionalFunc, //What to do on long press
        style: OptionalObject, // style for the button container
        textStyle: OptionalObject, // style for the button text
        disabled: OptionalBool, // whether the button is disabled
        variation: OptionalString // a way to use predefined style variations (e.g. large, warning)
    },
    render: function() {
        var touchableProps = {
            activeOpacity: this._computeActiveOpacity(),
        };

        if (!this.props.disabled) {
            touchableProps.onPress = this.props.onPress || this.props.onClick;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }


        //compute styles e.g. buttonGroupLeft, big, bigRight, buttonGroupText, bigText, but
        var groupStyle = [styles.buttonGroup,
            this.props.position && styles['buttonGroup' + Format.camelCase(this.props.position)],
            this.props.variation && styles['buttonGroup' + Format.camelCase(this.props.variation)],
            this.props.variation && this.props.position && styles[this.props.variation + Format.camelCase(this.props.position)],
            this.props.style
        ];

        var textStyle = [styles.buttonText,
            this.props.position && styles['buttonText' + Format.camelCase(this.props.position) + "Text"],
            this.props.variation && styles['buttonText' + Format.camelCase(this.props.variation)],
            this.props.variation && this.props.position && styles[this.props.variation + Format.camelCase(this.props.position) + "Text"],
            this.props.textStyle
        ];


        return (
            <View style={{opacity: this.props.disabled? 0.5: 1}}>
                <TouchableOpacity {...touchableProps}
                    style={groupStyle}>
                    { typeof this.props.children == "string" ? (
                        <Text style={textStyle}>{this.props.children}</Text>
                    ) : this.props.children}
                </TouchableOpacity>
            </View>
        );
    },

    _computeActiveOpacity() {
        if (this.props.disabled) {
            return 1;
        }
        return colour.buttonActiveOpacity;
    },
});

var styles = require('../../../style/style_buttons')

module.exports = Button;