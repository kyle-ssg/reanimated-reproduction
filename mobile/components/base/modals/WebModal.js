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
        this.refs.webview.goBack();
    },

    render: function () {
        return (
            <Flex>
                <Header>
                    <Column style={{ width: 50 }}>
                        {
                            this.state.backButtonEnabled ? (
                                <TouchableOpacity onPress={this.goBack}
                                                  transparent>
                                    <ION style={Styles.navBarButtonText} name="ios-arrow-back"/>
                                </TouchableOpacity>
                            ) : <View/>
                        }
                    </Column>

                    <Flex style={[Styles.centeredContainer]}>
                        <Text style={Styles.navBarText}>{this.state.title}</Text>
                    </Flex>

                    <Column style={{ width: 50, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={closeModal}
                                          transparent>
                            <ION style={Styles.navBarButtonText} name="ios-close"/>
                        </TouchableOpacity>
                    </Column>
                </Header>
                <WebView
                    onNavigationStateChange={this.onNavigationStateChange}
                    ref="webview"
                    style={{flex:1}}
                    source={{ uri: this.props.uri }}
                    scalesPageToFit={true}
                />
            </Flex>
        );
    }
});
