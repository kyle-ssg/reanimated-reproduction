const Navbar = function (props) {
  return {
    LeftButton: function (route, navigator, index, navState) {
      return index > 0 && (
          <TouchableOpacity
            style={Styles.navItemContainer}
            onPress={() => navigator.pop()}>
            <View style={[Styles.row]}>
              <ION
                name='ios-arrow-back'
                size={22}
                style={Styles.navButton}
              />
            </View>
          </TouchableOpacity>
        );
    },

    onMenuPress: function () {

    },

    navigate: function (navigator, route) {
      return _.partial(navigator.push, route);
    },

    RightButton: function (route, navigator, index, navState) {

      return (
        <TouchableOpacity onPress={props.onMenuPress} style={Styles.navItemContainer}>
          <View style={[Styles.row]}>
            <ION
              name='md-menu'
              size={22}
              style={Styles.navButton}
            />
          </View>
        </TouchableOpacity>);
    },

    Title: function (route, navigator, index, navState) {

      if (!route.title) {
        return null;
      }

      return (<View style={[Styles.navItemContainer, Styles.navItemTitleContainer]}>
        <Row>
          <Text style={[Styles.navBarTitle, Styles.container, { letterSpacing: 2 }]}>
            {route.title}
          </Text>
        </Row>
      </View>);
    },
  };
};

module.exports = Navbar;
