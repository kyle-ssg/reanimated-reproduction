module.exports = {

    inputContainer: {
        height: styleVariables.inputHeight
    },

    textInput: {
        backgroundColor: colour.inputBackground,
        height: 50,
        paddingLeft: styleVariables.gutterBase,
    },

    inputDefault: {
        backgroundColor:colour.inputBackground,
        borderRadius:4,
        borderColor:colour.inputBorder,
        borderWidth:PixelRatio.get() / 2,
        height:styleVariables.inputHeight
    },

    label: {
        color: styleVariables.text,
        marginBottom: styleVariables.gutterBase / 2
    },

    headerText: {
        fontSize: styleVariables.fontSizeBase / 1.25,
    },

    errorContainer: {
        padding: styleVariables.paddingBase,
        alignItems:'center',
        justifyContent:'center'
    },

    inputAppendContainer:{
        position:'relative',
    },

    inputAppend:{
        position:'absolute',
        zIndex:1,
        left:0,
        top:0,
        backgroundColor:'transparent',
        height:54,
        width:54,
        alignItems:'center',
        justifyContent:'center',
    },

    inputIndent:{
        paddingLeft:40,
    },
};
