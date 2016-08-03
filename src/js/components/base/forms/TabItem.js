const TabItem = (props)=>(
  props.children
);
TabItem.displayName = "TabItem";
TabItem.propTypes = {
  children: RequiredElement
};
module.exports = TabItem;
