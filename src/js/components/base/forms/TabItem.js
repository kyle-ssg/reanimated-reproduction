const TabItem = (props)=>(
  props.children || null
);
TabItem.displayName = "TabItem";
TabItem.propTypes = {
  children: OptionalElement
};
module.exports = TabItem;
