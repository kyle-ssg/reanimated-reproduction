module.exports = function (props) {
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
          onPress={closeSelect}>
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
      return (
        <View style={Styles.navItemContainer}>
          <Text style={[Styles.navBarText]}>
            {route.title}
          </Text>
        </View>
      );
    },
  };
};
