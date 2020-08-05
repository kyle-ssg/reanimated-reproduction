import { StyleSheet } from "react-native";

const style: Record<
string,
ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  //
  // Grid system / Rows
  // --------------------------------------------------

  column: {
    marginLeft: styleVariables.gutterBase,
    marginRight: styleVariables.gutterBase
  },

  container: {
    marginLeft: styleVariables.marginBaseHorizontal,
    marginRight: styleVariables.marginBaseHorizontal
  },

  noPad: {
    marginLeft: -styleVariables.paddingBase,
    marginRight: -styleVariables.paddingBase
  },

  alignItemsRight: {
    alignItems: "flex-end"
  },

  containerLoading: {
    opacity: 0.8
  },

  baseline: {
    alignItems: "flex-start"
  },

  centeredContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  alignCenter: {
    alignSelf: "center"
  },

  alignRight: {
    alignSelf: "flex-end"
  },

  centeredRow: {
    flexDirection: "row",
    justifyContent: "center"
  },

  row: {
    alignSelf: "stretch",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center"
  },

  spacedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  mb0: { marginBottom: 0 },
  mb5: { marginBottom: 8 },
  mb10: { marginBottom: 16 },
  mb15: { marginBottom: 24 },
  mb20: { marginBottom: 32 },

  ml0: { marginLeft: 0 },
  ml5: { marginLeft: 8 },
  ml10: { marginLeft: 16 },
  ml15: { marginLeft: 24 },
  ml20: { marginLeft: 32 },

  mr0: { marginRight: 0 },
  mr5: { marginRight: 8 },
  mr10: { marginRight: 16 },
  mr15: { marginRight: 24 },
  mr20: { marginRight: 32 },

  mt0: { marginTop: 0 },
  mt5: { marginTop: 8 },
  mt10: { marginTop: 16 },
  mt15: { marginTop: 24 },
  mt20: { marginTop: 32 },

  pb0: { paddingBottom: 0 },
  pb5: { paddingBottom: 8 },
  pb10: { paddingBottom: 16 },
  pb15: { paddingBottom: 24 },
  pb20: { paddingBottom: 32 },

  pl0: { paddingLeft: 0 },
  pl5: { paddingLeft: 8 },
  pl10: { paddingLeft: 16 },
  pl15: { paddingLeft: 24 },
  pl20: { paddingLeft: 32 },

  pr0: { paddingRight: 0 },
  pr5: { paddingRight: 8 },
  pr10: { paddingRight: 16 },
  pr15: { paddingRight: 24 },
  pr20: { paddingRight: 32 },

  pt0: { paddingTop: 0 },
  pt5: { paddingTop: 8 },
  pt10: { paddingTop: 16 },
  pt15: { paddingTop: 24 },
  pt20: { paddingTop: 32 },

  m0: { margin: 0 },
  m5: { margin: 8 },
  m10: { margin: 16 },
  m15: { margin: 24 },
  m20: { margin: 32 },

  p0: { padding: 0 },
  p5: { padding: 8 },
  p10: { padding: 16 },
  p15: { padding: 24 },
  p20: { padding: 32 },

  ph0: { paddingRight: 0, paddingLeft: 0 },

  ph5: { paddingRight: 8, paddingLeft: 8 },
  ph10: { paddingRight: 16, paddingLeft: 16 },
  ph15: { paddingRight: 24, paddingLeft: 24 },
  ph20: { paddingRight: 32, paddingLeft: 32 },

  pv0: { paddingTop: 0, paddingBottom: 0 },
  pv5: { paddingTop: 8, paddingBottom: 8 },
  pv10: { paddingTop: 16, paddingBottom: 16 },
  pv15: { paddingTop: 24, paddingBottom: 24 },
  pv20: { paddingTop: 32, paddingBottom: 32 },

  mh0: { marginRight: 0, marginLeft: 0 },
  mh5: { marginRight: 8, marginLeft: 8 },
  mh10: { marginRight: 16, marginLeft: 16 },
  mh15: { marginRight: 24, marginLeft: 24 },
  mh20: { marginRight: 32, marginLeft: 32 },

  mv0: { paddingTop: 0, paddingBottom: 0 },
  mv5: { paddingTop: 8, paddingBottom: 8 },
  mv10: { paddingTop: 16, paddingBottom: 16 },
  mv15: { paddingTop: 24, paddingBottom: 24 },
  mv20: { paddingTop: 32, paddingBottom: 32 }
};

module.exports = style;
