/**
 * Created by kylejohnson on 22/10/15.
 */
module.exports = Component({
  mixins: [AnimatedToggleMixin, React.PureRenderMixin],
  render: function () {
    return this.props.value && (
        <Animated.View style={[Styles.backdrop, { opacity: this.state.animated_value }]}>

        </Animated.View>
      )
  }
});
