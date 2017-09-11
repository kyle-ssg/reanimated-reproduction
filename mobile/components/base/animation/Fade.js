/**
 * Created by kylejohnson on 22/10/15.
 */
module.exports = React.createClass({
  propTypes: {
  },
  mixins: [AnimatedToggleMixin],
  render: function () {
    return (
      <Animated.View
        style={[{ overflow: 'hidden', opacity: this.state.animated_value }, this.props.style]}>
        {this.props.children}
      </Animated.View>
    );
  }
});