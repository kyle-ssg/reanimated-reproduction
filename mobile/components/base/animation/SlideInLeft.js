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
		};
	},
	mixins: [AnimatedToggleMixin],
	render: function () {
		marginLeft = this.state.animated_value.interpolate({
			inputRange: [0, 1, 2],
			outputRange: [this.props.start, this.props.end || 0, this.props.zoomedHeight]  // 0 : 150, 0.5 : 75, 1 : 0
		});
		return (
			<Animated.View
				style={[{ overflow: 'hidden', justifyContent: 'center', marginLeft }, this.props.style]}>
				{this.props.children}
			</Animated.View>
		);
	}
});
