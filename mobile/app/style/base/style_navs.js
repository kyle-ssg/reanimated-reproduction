// https://github.com/wix/react-native-navigation/wiki/Styling-the-navigator
global.navbarStyle = {
    statusBar: {
        style: 'light',
    },
    topBar: {
        elevation: 0,
        noBorder: false,
        background: {
            translucent: false,
            color: palette.navBarBackground,
        },
        title: {
            color: palette.navBarText,
        },
        subtitle: {
            fontSize: 10,
            color: palette.navBarSubtitle,
        },
        backButton: Platform.OS === 'ios' ? {
            title: 'Back',
            color: palette.navBarIcon,
        } : {},
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
            color: palette.navBarText,
        },
        subtitle: {
            fontSize: 10,
            color: palette.navBarSubtitle,
        },
        backButton: {
            title: 'Back',
            color: palette.navBarIcon,
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
        color: palette.navBarIcon,
    },
};

global.tabsHidden = {
    bottomTabs: {
        drawBehind: true,
        visible: false,
    },
    backButton: {
        // title: 'Back',
        color: palette.navBarIcon,
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
