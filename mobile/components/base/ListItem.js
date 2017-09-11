var Listitem = Component({
    displayName: 'ListItem',
    getDefaultProps: function () {
        return {
            onPress: null,
            text: null,
            underlayColor: colour.inputBackground,
        };
    }, render: function () {
        content = (
            <Row>
                {this.props.icon}
                <View style={[this.props.disabled && Styles.listItemDisabled, Styles.liContent, { backgroundColor: 'transparent' }]}>
                    {this.props.children}
                </View>
            </Row>
        );
        return (
            this.props.onPress ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.props.disabled ? null : this.props.onPress}>
                    <View style={this.props.style || Styles.listItem}>
                    {content}
                    </View>
                </TouchableOpacity>
                : <View style={[this.props.style || Styles.listItem]}>{content}</View>
        );
    }
});
module.exports = Listitem;
