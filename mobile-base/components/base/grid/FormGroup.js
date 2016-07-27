module.exports = Component({
    render: function() {
        return (
            <View style={[Styles.formGroup, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
})