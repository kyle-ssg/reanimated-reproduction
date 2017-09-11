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
    var height = this.state.animated_value.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, this.props.height, this.props.zoomedHeight]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
      width = this.state.animated_value.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, this.props.width, this.props.zoomedWidth]  // 0 : 150, 0.5 : 75, 1 : 0
      });
    return (
      <Animated.View
        source={this.props.source}
        style={[{
          overflow: 'hidden',
          height: height || undefined,
          width: this.props.width ? width : DeviceWidth
        }, this.props.style]}>
        {this.props.children}
      </Animated.View>
    );
  }
});
