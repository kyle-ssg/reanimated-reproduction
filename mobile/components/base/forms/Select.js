/**
 * Created by kylejohnson on 22/09/15.
 */
var NavigationBarRouteMapper = require('../../navbars/NavbarSelect');
module.exports = Component(Object.assign({}, {

    propTypes: {
        onChange: OptionalFunc,
        value: OptionalString
    },


    componentDidUpdate: function (oldProps) {
        if (this.props.value != oldProps.value || this.props.placeholder != oldProps.placeholder) {
            this.setState(this.getInitialState());
        }
    },


    getInitialState: function () {

        var index = 0,
            selectedElm = _.find(this.props.children, function (child, i) {
                if (child && child.props && child.props.value == this.props.value) {
                    index = i;
                    return true
                }
            }.bind(this)),
            state = {
                selectedIndex: index,
                value: selectedElm && selectedElm.props.text
            };

        return state;

    },
    renderScene: function () {
        return (
            <View style={Styles.navContent}>
                <ScrollView style={[{ flex: 1 }]}>
                    {_.map(this.props.children, function (child, i) {
                        if (!child) {
                            return;
                        }
                        return child.props.value ? (
                            <ListItem key={child.props.key || child.props.value}
                                      index={i}
                                      showSelect={true}
                                      value={this.state.selectedIndex == i}
                                      onPress={_.partial(this.onChange, i)}
                                      style={[child.props.style, child.props.key]}>
                                { child.props.children }
                            </ListItem>
                        ) : (
                            child
                        )
                    }.bind(this))}
                </ScrollView>
            </View>
        )
    },
    onChange: function (data, elem) {
        var selectedElem = this.props.children[data];
        if (selectedElem) {
            if (this.props.onChange) {

                this.props.onChange(selectedElem.props.value == null ? selectedElem.props.children :
                    selectedElem.props.value, selectedElem.props.data);
            }
            this.setState({
                selectedIndex: data,
                value: selectedElem.props.text == "" ? this.props.placeholder : selectedElem.props.text
            });
        }
        closeSelect();
    },

    show: function () {
        this.refs.input.blur()
        openSelect(
            <Navigator
                configureScene={this.configureScene}
                sceneStyle={Styles.navContent}
                style={{ flex: 1 }}
                onWillFocus={this.routeChanged}
                navigationBar={
                    <Navigator.NavigationBar
                        style={[Styles.navBar, Styles.selectNavBar]}
                        routeMapper={NavigationBarRouteMapper({ onMenuPress: this.onMenuPress })}
                        key="account-nav-bar"
                    />
                }
                initialRoute={{ title: this.props.title || "Select an option" }}
                renderScene={this.renderScene}
            />
        );
    },

    focus: function () {
        this.refs.input.focus()
    },

    render: function () {
        var text = this.state.value || this.props.title;
        return (
            <TouchableOpacity onPress={this.focus} style={Styles.inputContainer}>
                {text && <Text style={Styles.label}>{text}</Text>}
                <ReactNative.TextInput
                    placeholderTextColor={Styles.placeholderTextColor}
                    ref={"input"}
                    onFocus={this.show}
                    value={this.props.truncate ?
                        Format.truncateText(this.state.value, this.props.truncate)
                        : this.state.value }
                    placeholder={this.state.value || this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    style={[Styles.input, this.props.style]}
                    onSubmitEditing={this.props.onSubmitEditing}
                    keyboardType={this.props.keyboardType}/>
            </TouchableOpacity>
        )
    }
}));
