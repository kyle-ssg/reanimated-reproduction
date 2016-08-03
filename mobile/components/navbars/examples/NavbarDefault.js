module.exports = function (props) {
    return {
        LeftButton: function (route, navigator, index, navState) {
            if (index > 0) {
                return (
                    <TouchableOpacity
                        style={Styles.navItemContainer}
                        onPress={() => navigator.pop()}>
                        <View style={[Styles.row]}>
                            <ION
                                name='ios-arrow-back'
                                size={22}
                                color={colour.navBarIcon}
                                style={[{ marginLeft: 10, marginBottom: -5, marginRight: 10 }]}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }
        },

        onMenuPress: function () {

        },

        navigate: function (navigator, route) {
            return _.partial(navigator.push, route);
        },

        RightButton: function (route, navigator, index, navState) {
            if (!props || !props.onMenuPress) {
                return null;
            }
            return (<TouchableOpacity
                style={Styles.navItemContainer}
                onPress={() => props.onMenuPress()}>
                <View style={[Styles.row]}>
                    <ION
                        name='md-menu'
                        size={22}
                        color={colour.navBarIcon}
                        style={[{ marginLeft: 10, marginBottom: -5, marginRight: 10 }]}
                    />
                </View>
            </TouchableOpacity>)
        },

        Title: function (route, navigator, index, navState) {

            if (!route.title) {
                return null;
            }

            return <View style={[Styles.navItemContainer, Styles.navItemTitleContainer]}>
                <Row>
                    <Text style={[Styles.navBarTitle, Styles.sukFont, Styles.container, { letterSpacing: 2 }]}>
                        {route.title}
                    </Text>
                </Row>
            </View>
        },
    }
};
