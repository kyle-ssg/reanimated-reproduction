/**
 * Created by kylejohnson on 11/01/2016.
 */
module.exports = Component({
    displayName: 'DefaultMenu',
    render: function () {
        var navItems = [
            {
                text: "Home",
                route: '/'
            },
            {
                text: "Other",
                route: '/other'
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
                            <Link
                                style={Styles.menuItem}
                                activeStyle={Styles.menuItemActive}
                                onPress={this.props.onPress} to={item.route}>
                                <View>
                                    <Row space>
                                        <Flex>
                                            {item.icon && <ION name={item.icon} style={Styles.menuIcon}/>}
                                        </Flex>
                                        <Text
                                            style={[Styles.menuItemText, item.isImportant && { color: colour.primary }]}>
                                            {item.text}
                                        </Text>
                                    </Row>
                                </View>
                            </Link>
                        );
                    }.bind(this))}
                </ScrollView>
            </View>
        );
    }
});
