module.exports = Component({
  render: function () {
    return (
      <View style={[Styles.row, this.props.space && { justifyContent: 'space-between' }, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
})
