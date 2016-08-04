module.exports = function () {
  return {
    LeftButton: function () {
      return null;
    },

    onMenuPress: function () {

    },

    RightButton: function () {
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

    Title: function (route) {

      if (!route.title) {
        return null;
      }

      return (<TouchableOpacity>
        <Row>
          <Text style={[Styles.navBarTitle, Styles.container, { letterSpacing: 2 }]}>
            {route.title.toUpperCase()}
          </Text>
        </Row>
      </TouchableOpacity>);
    },
  };
};
// route, navigator, index, navState
