module.exports = function (props) {
  return {
    LeftButton: function (route, navigator, index, navState) {
      return null;
    },

    onMenuPress: function () {

    },

    RightButton: function (route, navigator, index, navState) {
      return (
        <TouchableOpacity
          style={Styles.navItemContainer}
          onPress={closeModal}>
          <View style={[Styles.row]}>
            <ION
              name='ios-close'
              size={32}
              color={colour.navBarIcon}
              style={[{ marginLeft: 10, marginRight: 10 }]}
            />
          </View>
        </TouchableOpacity>
      );
    },

    Title: function (route, navigator, index, navState) {

      if (!route.title) {
        return null;
      }

      return <TouchableOpacity>
        <Row>
          <Text style={[Styles.navBarTitle, Styles.container, { letterSpacing: 2 }]}>
            {route.title.toUpperCase()}
          </Text>
        </Row>
      </TouchableOpacity>
    },
  }
};
