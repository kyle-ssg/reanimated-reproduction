/**
 * Created by kylejohnson on 11/05/2016.
 */
/**
 * Created by kylejohnson on 04/05/2016.
 */
const h4 = class extends React.Component {
  render () {
    return (
      <Text style={[Styles.h4, this.props.style]}>{this.props.children}</Text>
    );
  }
};

h4.propTypes = {
  style: React.PropTypes.any,
  children: OptionalNode
};

module.exports = h4;
