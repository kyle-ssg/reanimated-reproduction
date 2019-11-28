module.exports = {
    // Utility classes
    // -------------------------

    noPadding: {
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },

    textCenter: {
        textAlign: 'center',
    },

    textLeft: {
        textAlign: 'left',
    },

    textRight: {
        textAlign: 'right',
    },

    alignLeft:{
        alignItems:'flex-start'
    },

    alignRight:{
        alignItems:'flex-end'
    },

    backdrop: {
        flex: 1,
        backgroundColor: styleVariables.backdropBackground,
    },

    padded: {
        padding: styleVariables.paddingBase,
    },

    clipped:{
        overflow:'hidden',
    },

    shadow:{
        shadowColor: '#333',
        shadowOffset: {
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
    },

};
