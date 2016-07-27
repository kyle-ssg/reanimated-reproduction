//propTypes: value: OptionalNumber

module.exports =
    class extends React.Component {
        render() {
            return (
                <View style={[this.props.style, {flex:this.props.value || 1}]}>
                    {this.props.children}
                </View>
            )
        }
    };