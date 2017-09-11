/**
 * Created by kylejohnson on 22/10/15.
 */
module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            height: Dimensions.get("window").height
        };
    },
    mixins: [AnimatedToggleMixin],
    render: function () {
        scale = this.state.animated_value.interpolate({
            inputRange: [0, 1],
            outputRange: [1, this.props.to]  // 0 : 150, 0.5 : 75, 1 : 0
        });
        return (
            <Animated.View
                style={[{  transform: [{ scale }] }, this.props.style]}>
                {this.props.children}
            </Animated.View>
        );
    }
});
