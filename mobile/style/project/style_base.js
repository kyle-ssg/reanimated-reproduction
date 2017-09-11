module.exports = {
    fullPageImage:{
        height:DeviceHeight,
        width:DeviceWidth,
    },

    onboardingImageContainer:{
        height:DeviceWidth/2,
        overflow:'hidden',
        justifyContent:'center',
        marginTop:styleVariables.marginBaseVertical * 2,
        marginBottom:styleVariables.marginBaseVertical * 2,
    },

    onboardingImage:{
        height:DeviceWidth/2,
        resizeMode:'contain',
    },
    onboardingLoginImage:{
        height:DeviceWidth/2.5,
        resizeMode:'contain',
    },

    hero :{
        overflow:'hidden',
        paddingTop:styleVariables.marginBaseVertical,
        backgroundColor:'transparent'
    },
    bodyAlt: {
        backgroundColor: colour.bodyBackgroundAlt
    },

    shadow: {
        shadowColor: '#333',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
    },

    avatarShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },

    // APP
    navContent: {
        padding: styleVariables.gutterBase
    },

    //ICONS
    iconDefault: {
        height: 30,
        resizeMode: 'contain'
    },

    iconButton: {
        resizeMode: 'contain',
        paddingLeft:6,
        paddingRight:6,
        paddingTop:1,
        height:25,
        marginRight:10
    },

    dropListIcon: {
        fontSize: em(1.2),
        color: styleVariables.white
    },

    // APP
    stationName: {
        width: DeviceWidth / 3.3,
    },

    actionContainer:{
        padding:styleVariables.paddingBase,
    },

    marginTopLarge:{
        marginTop:styleVariables.marginBaseVertical * 2,
    }
};
