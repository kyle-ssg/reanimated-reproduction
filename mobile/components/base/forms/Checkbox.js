/**
 * Created by kylejohnson on 14/11/2015.
 */

var styles = require('../../../style/style_forms')

module.exports = Component({
    mixins: [AnimatedToggleMixin],
    propTypes: {
        onChange: OptionalFunc,
        size: OptionalNumber,
        backgroundColor: OptionalString,
        activeBackgroundColor: OptionalString,
        borderColor: OptionalString,
        activeBorderColor: OptionalString,
    },

    getDefaultProps: function () {
        return {
            size: 14,
            backgroundColor: pallette.toggle,
            borderColor: pallette.toggle,
            activeBackgroundColor: pallette.toggleActive,
            activeBorderColor: pallette.toggleActive,
        }
    },

    shouldComponentUpdate: function (newProps) {
        return this.props.value !== newProps.value;
    },

    onPress: function () {
        this.props.onChange(!this.props.value);
    },

    render: function () {
        var radioColor = this.state.animated_value.interpolate({ //transition between active and inactive color
                inputRange: [0, 1],
                outputRange: [this.props.backgroundColor, this.props.activeBackgroundColor] //active
            }),
            borderColour = this.state.animated_value.interpolate({ //transition between active and inactive border
                inputRange: [0, 1],
                outputRange: [this.props.borderColor, this.props.activeBorderColor]
            }),
            size = this.props.size;

        return <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
            <Animated.View
                style={[styles.radio, {
                    backgroundColor: radioColor,
                    borderColor: borderColour,
                    width: size,
                    height: size
                }]}>
                {this.props.value && (
                    <ION color="white" name="checkmark" size={this.props.size - 4}/>
                )}
            </Animated.View>
        </TouchableOpacity>
    }
});