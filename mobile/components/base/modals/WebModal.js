var NavBar = function (title, goBack) {
  return {
    LeftButton: function () {
      return goBack && (
          <TouchableOpacity
            style={[styles.navItemContainer, { marginRight: 10 }]}
            onPress={goBack}>
            <ION
              name='chevron-left'
              size={28}
              color={colour.white}
              style={[Styles.navBarIcon, { marginLeft: 10 }]}
            />
          </TouchableOpacity>
        );
    },

    RightButton: function () {
      return (<TouchableOpacity
        style={[styles.navItemContainer, { marginRight: 10 }]}
        onPress={closeModal}>
        <ION
          name='ios-close-outline'
          size={28}
          color={colour.text}
          style={[Styles.navBarIcon, { marginLeft: 10 }]}
        />
      </TouchableOpacity>);
    },

    onMenuPress: function () {
    },

    Title: function () {

      return title && (
          <View style={[styles.navItemContainer, Styles.navItemTitleContainer]}>
            <Text style={[styles.navBarText, Styles.navBarTitleText]}>
              {Format.truncateText(title, 20)}
            </Text>
          </View>
        );
    }
  };
};

module.exports = Component({
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },

  onNavigationStateChange: function (navState) {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      title: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  },

  goBack: function () {
    this.refs.navigator.refs.webview.goBack();
  },

  renderScene: function () {
    return (
      <View style={{ flex: 1, backgroundColor: colour.rowLighter, justifyContent: 'center', padding: 10 }}>
        <WebView
          onNavigationStateChange={this.onNavigationStateChange}
          ref="webview"
          style={styles.webView}
          source={{ uri: this.props.uri }}
          scalesPageToFit={true}
        />
      </View>
    );
  },
  render: function () {
    return (

      <Navigator
        style={{ flex: 1 }}
        navigationBar={
          <Navigator.NavigationBar
            style={[Styles.navBar, Styles.navBarNoSlide]}
            routeMapper={NavBar(this.state.title || this.props.title, this.state.backButtonEnabled && this.goBack)}
            key="account-nav-bar"
          />
        }
        sceneStyle={Styles.navContent}
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{ id: "home" }}
      />
    );
  }
});

var styles = StyleSheet.create({
  webView: {
    backgroundColor: colour.rowLighter,
    height: 200,
  },
  navBarText: {
    color: '#333',
    fontSize: 18,
  },
  navBadge: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  navBarButtonText: {
    color: '#fff',
  },
  menuButtonImage: {
    width: 34,
    height: 34,
    marginRight: 5,
    borderRadius: 5
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
  },
  navItemContainer: {
    height: 40,
    justifyContent: 'center'
  }
});
