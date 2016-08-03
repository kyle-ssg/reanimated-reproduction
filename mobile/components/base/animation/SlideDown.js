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
            outputRange: [this.props.height, 0, this.props.zoomedHeight]  // 0 : 150, 0.5 : 75, 1 : 0
        });
        return (
            <Animated.View
                style={[{ overflow: 'hidden', justifyContent: 'center', marginBottom: height }, this.props.style]}>
                {this.props.children}
            </Animated.View>
        )
    }
});