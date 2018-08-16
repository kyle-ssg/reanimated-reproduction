module.exports = {
    buttonGroup: {
        borderRadius:4,
    },
    buttonText: {
        backgroundColor:'transparent',
        color: colour.btnText,
        fontWeight: 'bold',
        fontSize: styleVariables.fontSizeBase
    },

    buttonSup:{
        fontSize:styleVariables.fontSizeBase / 1.5,
    },

    buttonFacebook:{
        backgroundColor:pallette.facebook,
    },

    buttonGoogle:{
        backgroundColor:pallette.google,
    },

    buttonTwitter:{
        backgroundColor:pallette.twitter,
    },

    hollowButton:{
        borderWidth:PixelRatio.get()/2,
        borderColor:'#fff',
        backgroundColor:'transparent'
    },

    sideMenu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        height:40
    },

    buttonIcon:{
        marginTop:3,
        color:'#fff',
        fontSize:20,
        marginRight:5
    },

	dropButton: {
		height: em(3),
		width: em(3),
		borderRadius: em(3) / 2,
		shadowColor: "#000000",
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			height: 0,
			width: 0
		}
	},
};
