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

    buttonWhite:{
        backgroundColor:pallette.white,
    },

    buttonWhiteText:{
        color:pallette.primaryBlue,
    },

    buttonGreen:{
        backgroundColor:pallette.primaryGreen
    },

    ButtonError:{
        backgroundColor:pallette.error
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

    capsuleButton:{
        height:34,
        borderRadius:17,
        borderColor:pallette.blueGreyText,
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
    }
};
