import { StyleSheet } from "react-native";

const style: Record<
string,
ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  listContainer: {
    flex: 1,
    backgroundColor: colour.listBackground,
  },

  insetList: {
    padding: styleVariables.paddingBase,
    backgroundColor: "#fff",
  },

  listItem: {
    minHeight: 44,
    alignItems: "stretch",
    alignSelf: "stretch",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colour.divider,
    backgroundColor: colour.listBackground,
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase,
  },

  listItemAlt: {
    borderBottomColor: colour.dividerAlt,
    backgroundColor: colour.listBackgroundAlt,
  },

  listItemDisabled: {
    opacity: 0.5,
  },

  listItemLast: {
    borderBottomWidth: 0,
  },

  liContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  listItemText: {
    color: palette.textLight,
    fontWeight: styleVariables.normalFontWeight,
  },

  listIcon: {
    marginLeft: styleVariables.marginBaseHorizontal,
    fontSize: styleVariables.fontSizeBase * 1.2,
  },

  listIconNav: {
    marginLeft: styleVariables.marginBaseHorizontal,
    fontSize: styleVariables.fontSizeBase * 1.2,
    color: palette.iconFaint,
  },

  listItemTitle: {},

  listHeaderText: {
    color: "#fff",
  },

  indentListItem: {
    paddingLeft: 30,
  },
};

module.exports = style;
