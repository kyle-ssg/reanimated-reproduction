/**
 * Created by kylejohnson on 24/07/2016.
 */
var Row = (props) => (
  <div
    {... props}
    style={_.merge({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: props.space ? 'space-between' : 'flex-start'
    }, props.style)}>
    {props.children}
  </div>
);

Row.propTypes = {
  space: OptionalBool,
  children: OptionalArray,
  style: React.PropTypes.any
};

module.exports = Row;
