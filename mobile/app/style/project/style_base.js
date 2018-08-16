module.exports = {

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

	roundedAnimationContainer:{
		backgroundColor: 'white',
		alignSelf: 'center',
		top: 0,
		zIndex: 2,
		position: 'absolute',
		borderRadius: 40,
		width: 80,
		height: 80,
		justifyContent: 'center'
	},

	roundedAnimationInner:{
		backgroundColor: pallette.secondary,
		alignSelf: 'center',
		borderRadius: 35,
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center'
	},
};
