var Text = Component({
  displayName: 'Text',
  render: function () {
    return <ReactNative.Text style={[Styles.text, this.props.style]}>{this.props.children}</ReactNative.Text>;
  }
});

Text.propTypes = {
  style: React.PropTypes.any,
  children: OptionalNode,
};

module.exports = Text;
