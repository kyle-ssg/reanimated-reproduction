/**
 * Created by kylejohnson on 11/05/2016.
 */
/**
 * Created by kylejohnson on 04/05/2016.
 */
module.exports = class extends React.Component {
  render () {
    return (
      <Text style={[Styles.h1, this.props.style]}>{this.props.children}</Text>
    )
  }
};
