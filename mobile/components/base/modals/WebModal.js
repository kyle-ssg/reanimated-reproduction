import NavBar from '../../navbars/NavbarModal'
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
