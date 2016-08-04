var IValueTracker = require('../../common/interfaces/widget/IValueTracker');
module.exports = Component(Object.assign({}, IValueTracker, {
  displayName: 'ValueTracker',

  getStyle: function () {
    var styles = [];

    if (this.props.style) {
      styles.push(this.props.style);
    }

    if (this.state.change > 0) {
      styles.push(styles.up);
      if (this.props.upStyle) {
        styles.push(this.props.upStyle);
      }
    } else if (this.state.change < 0) {
      styles.push(styles.down);
      if (this.props.downStyle) {
        styles.push(this.props.downStyle);
      }
    }

    return styles;
  },
  render: function () {
    var style = this.getStyle();
    return (
      <Text style={style}>
        {this.props.children || this.props.value}
      </Text>
    );
  }
}));

var styles = StyleSheet.create({
  up: {
    color: '#70bd07'
  },
  down: {
    color: '#b71541'
  }
});
