/**
 * Created by kylejohnson on 24/07/2016.
 */
import cn from 'classnames'
var Row = (props) => (
  <div
    {... props}
      className={cn({
        'flex-row': true,
        space:props.space
      })}
    >
    {props.children}
  </div>
);

Row.propTypes = {
  space: OptionalBool,
  children: OptionalArray,
  style: React.PropTypes.any
};

module.exports = Row;
