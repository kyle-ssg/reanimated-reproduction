// propTypes: value: OptionalNumber

const Flex = class extends React.Component {
    render() {
        return (
            <Animated.View
              style={[this.props.style, { flex: this.props.value }]}
              testID={this.props.testID}
            >
                {this.props.children}
            </Animated.View>
        );
    }
};

Flex.defaultProps = {
    value: 1,
};

Flex.propTypes = {
    value: OptionalNumber,
    children: OptionalElement,
    style: React.PropTypes.any,
    testID: OptionalString,
};

module.exports = Flex;
