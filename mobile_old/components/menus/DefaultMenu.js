/**
 * Created by kylejohnson on 11/01/2016.
 */
module.exports = Component({
    displayName: 'DefaultMenu',
    render: function () {
        var navItems = [
            {
                text: "Home",
                route: '/',
                icon:'ios-close'
            },
            {
                text: "Other",
                route: '/other',
                icon:'ios-close'
            }
        ];

        return (
            <View style={[Styles.menu]}>
                <View style={[Styles.menuHeading,{padding:0}]}>
                    <View space style={[Styles.row]}>
                        <Flex/>
                        <ION name="ios-close" style={Styles.navIcon}/>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {navItems.map(function (item, i) {
                        return (
                            <View
                                key={item.route}
                                underlayColor='rgba(0,0,0,.2)'
                                style={Styles.menuItem}
                                activeStyle={Styles.menuItemActive}
                                onPress={this.props.onPress}
                                to={item.route}>
                                <View>
                                    <Row space>
                                        <View>
                                            {item.icon && <ION name={item.icon} style={Styles.menuIcon}/>}
                                        </View>
                                        <Flex>
                                        <Text
                                            style={[Styles.menuItemText, item.isImportant && { color: colour.primary }]}>
                                            {item.text}
                                        </Text>
                                        </Flex>
                                    </Row>
                                </View>
                            </View>
                        );
                    }.bind(this))}
                </ScrollView>
            </View>
        );
    }
});
