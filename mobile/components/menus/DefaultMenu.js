/**
 * Created by kylejohnson on 11/01/2016.
 */
module.exports = Component({
  displayName: 'DefaultMenu',

  route: function (data) {
    this.props.onPress(data);
  },
  render: function () {
    var navItems = [
      {
        text: "Home",
        route: { id: "home", title: "Home" }
      }
    ];

    return (
      <View style={[Styles.menu]}>
        <View style={[Styles.menuHeading]}>
          <View space style={[Styles.row]}>
            <Flex/>
            <ION name="ios-close" style={Styles.menuIconClose}/>
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {navItems.map(function (item, i) {
            return (
              <ListItem key={i} onPress={_.partial(this.route, item.route)}
                        style={{ backgroundColor: 'transparent', flex: 1 }}>
                <Row space>
                  <Flex>
                    {item.icon && <ION name={item.icon} style={Styles.menuIcon}/>}
                  </Flex>
                  <Text style={[Styles.menuText, item.isImportant && { color: colour.primary }]}>
                    {item.text}
                  </Text>
                </Row>
              </ListItem>
            );
          }.bind(this))}
        </ScrollView>
      </View>
    );
  }
});
