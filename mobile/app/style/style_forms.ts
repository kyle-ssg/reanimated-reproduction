import asStyle from './style-utils/asStyle';

export default asStyle({
  textInput: {
    height: styleVariables.inputHeight,
    fontSize: styleVariables.inputFontSizeBase,
    backgroundColor: 'white',
    paddingLeft: styleVariables.gutterBase,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInputText: {
    color: palette.text
  },
  inputLabel: {
    fontSize: 16,
  },
  selectBoxContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
});
