// https://github.com/wix/react-native-navigation/wiki/Styling-the-navigator
global.navbarStyle = {
    statusBar: {
        style: 'dark',
    },
    topBar: {
        elevation: 0,
        noBorder: false,
        background: {
            translucent: false,
            color: 'white',
        },
        title: {
            color: pallette.navBarText,
        },
        subtitle: {
            fontSize: 10,
            color: pallette.navBarSubtitle,
        },
        backButton: {
            title: 'Back',
            color: pallette.navBarIcon,
        },
    },
};

global.navbarWithTabsStyle = {
    statusBar: {
        style: 'dark',
    },
    topBar: {
        elevation: 0,
        noBorder: true,
        drawBehind: true,
        visible: false,
        background: {
            translucent: true,
            color: 'transparent',
        },
        title: {
            color: pallette.navBarText,
        },
        subtitle: {
            fontSize: 10,
            color: pallette.navBarSubtitle,
        },
        backButton: {
            title: 'Back',
            color: pallette.navBarIcon,
        },
    },
};

global.backHidden = {
    topBar: {
        backButton: {
            visible: false,
        },
    },
};

global.navbarHidden = {
    topBar: {
        visible: false,
    },
    bottomTabs: {
        drawBehind: true,
        visible: false,
    },
    backButton: {
        title: '',
        color: pallette.navBarIcon,
    },
};

global.tabsHidden = {
    bottomTabs: {
        drawBehind: true,
        visible: false,
    },
    backButton: {
        // title: 'Back',
        color: pallette.navBarIcon,
    },
};

module.exports = {

    navIcon: {
        fontSize: 28,
        color: 'white',
        marginTop: 10,
    },

    barText: {
        color: 'black',
    },

};
