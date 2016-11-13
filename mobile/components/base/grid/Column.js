/**
 * Created by Kyle on 17/06/2016.
 */
const Column = (props) => (
  <Animated.View style={[Styles.column, props.style]}>{props.children}</Animated.View>
);

Column.propTypes = {
  style: React.PropTypes.any,
  children: OptionalObject
};

module.exports = Column;
