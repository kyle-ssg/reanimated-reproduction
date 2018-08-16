module.exports = {

	inputContainer: {
		height: styleVariables.inputHeight
	},

	textInput: {
		flex: 1,
		backgroundColor: colour.inputBackground,
		paddingLeft: styleVariables.gutterBase,
	},

	inputDefault: {
		backgroundColor: colour.inputBackground,
		borderRadius: 4,
		borderColor: colour.inputBorder,
		borderWidth: PixelRatio.get() / 2,
		height: styleVariables.inputHeight
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
