/**
 * Created by kylejohnson on 22/10/15.
 */
module.exports = Component({

  propTypes: {
    size: OptionalNumber,
    value: OptionalNumber,
  },
  mixins: [AnimatedToggleMixin],
  render: function () {

    var backdropSize,
      contentSize;

    switch (this.props.size) {
      case 1: {
        backdropSize = 2;
        contentSize = 1;
        break;
      }
      case 2: {
        backdropSize = 1;
        contentSize = 1;
        break;
      }
      default : {
        backdropSize = 0;
        contentSize = 1;
      }
    }

    var direction = this.props.direction || "bottom";
    var height = this.props.height || Dimensions.get("window").height,
      top = this.state.animated_value.interpolate({
        inputRange: [0, 1],
        outputRange: [this.props.fade ? 1 : (direction == "top" ? -Dimensions.get("window").height : Dimensions.get("window").height),
          1]
      });

    return (
      <Animated.View
        style={[Styles.modal, {
          height: height,
          marginTop: top
        }, this.props.fade && { opacity: this.state.animated_value }]}>
        <View style={{ flex: 1 }}>
          {backdropSize && this.props.direction != "top" ? (
            <TouchableOpacity onPress={this.props.onDismiss} style={{ flex: backdropSize }}>
              <View/>
            </TouchableOpacity>
          ) : null}
          <View style={this.props.size ? { flex: contentSize } : {}}>
            {this.props.children}
          </View>
          {backdropSize && this.props.direction == "top" ? (
            <TouchableOpacity onPress={this.props.onDismiss} style={{ flex: backdropSize }}>
              <View/>
            </TouchableOpacity>
          ) : null}
        </View>
      </Animated.View>
    );
  }
});
