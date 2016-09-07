var NavBar = function (title, goBack) {
  return {
    LeftButton: function () {
      return goBack && (
          <TouchableOpacity
            style={[Styles.navItemContainer]}
            onPress={goBack}>
            <ION
              name='ios-arrow-back'
              size={22}
              style={[Styles.navButton]}
            />
          </TouchableOpacity>
        );
    },

    RightButton: function () {
      return (<TouchableOpacity
        style={[Styles.navItemContainer]}
        onPress={closeModal}>
        <ION
          name='ios-close-outline'
          size={22}
          style={[Styles.navBarIcon]}
        />
      </TouchableOpacity>);
    },

    onMenuPress: function () {
    },

    Title: function () {

      return title && (
          <View style={[Styles.navItemContainer, Styles.navItemTitleContainer]}>
            <Text style={[Styles.navBarTitle, Styles.container]}>
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
      <View style={Styles.webViewContainer}>
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
            style={[Styles.navBar]}
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
