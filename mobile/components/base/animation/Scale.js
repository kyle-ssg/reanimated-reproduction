/**
 * Created by kylejohnson on 22/10/15.
 */
module.exports = Component({
    propTypes: {
        height: OptionalNumber,
        zoomed: OptionalNumber,
    },
    getDefaultProps: function () {
        return {
            height: Dimensions.get("window").height
        }
    },
    mixins: [AnimatedToggleMixin],
    render: function () {
        height = this.state.animated_value.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [2, 1, -2]  // 0 : 150, 0.5 : 75, 1 : 0
        });
        return (
            <Animated.View
                style={[{ overflow: 'hidden', transform: [{ scaleY: this.state.animated_value }] }, this.props.style]}>
                <Animated.View
                    style={[{ transform: [{ scaleY: height }] }, this.props.style]}>
                    {this.props.children}
                </Animated.View>
            </Animated.View>
        )
    }
});