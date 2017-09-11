8/**
 * Created by kylejohnson on 14/11/2015.
 */
module.exports = Component({
  shouldComponentUpdate: function () {
    return false;
  },
  render: function () {
    return <View style={[Styles.divider, this.props.style]}/>;
  }

});
