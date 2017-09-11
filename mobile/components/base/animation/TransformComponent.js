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
    height = this.state.animated_value.interpolate({
      inputRange: [0, 1],
      outputRange: [1, this.props.zoom]  // 0 : 150, 0.5 : 75, 1 : 0
    });
    return (
      <Animated.View
        style={[{ overflow: 'hidden', justifyContent: 'center', transform }, this.props.style]}>
        {this.props.children}
      </Animated.View>
    );
  }
});
