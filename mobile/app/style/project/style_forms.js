module.exports = {

	textInput: {
		height:styleVariables.inputHeight,
		lineHeight:styleVariables.inputHeight,
		backgroundColor: colour.inputBackground,
		paddingLeft: styleVariables.gutterBase,
        borderColor: colour.inputBorder,
        borderBottomWidth:styleVariables.inputBorderWidth
},

	label: {
		color: styleVariables.text,
		marginBottom: styleVariables.gutterBase / 2
	},

	inputAppendContainer: {
		position: 'relative',
	},

	inputAppend: {
		position: 'absolute',
		zIndex: 1,
		left: 0,
		top: 0,
		backgroundColor: 'transparent',
		height: 54,
		width: 54,
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputIndent: {
		paddingLeft: 40,
	},
};
