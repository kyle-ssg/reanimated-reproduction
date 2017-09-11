module.exports = {
    rounded:{
        borderRadius:styleVariables.borderRadiusDefault,
    },
    noBackground:{
        backgroundColor:'transparent'
    },

    greyBackground:{
        backgroundColor:styleVariables.modalBackground
    },

    textRight:{
        textAlign:'right',
    },

    dotOuter:{
        backgroundColor:'#fff',
        height:20,
        width:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },

    dotInner:{
        backgroundColor:'#fff',
        height:15,
        width:15,
        borderRadius:7.5,
        borderWidth:1,
        borderColor:pallette.primary
    },

    trackLine:{
        width:10,
        height:63.5,
        backgroundColor:'#fff',
        alignItems:'stretch',
    },

    trackLineSmall:{
        width:10,
        height:24.75,
        backgroundColor:'#fff',
        alignItems:'stretch',
        position:'relative',
        bottom:0,
        marginTop:-2,
    },

    underline:{
        borderBottomWidth:PixelRatio.get() / 2,
        borderColor:pallette.dividerLight
    },

    verticalCenter:{
        justifyContent:'center'
    },

    horizontalCenter:{
        alignItems:'center',
    },

    paddingHorizontal:{
        paddingLeft:styleVariables.paddingBase,
        paddingRight:styleVariables.paddingBase,
    },
};