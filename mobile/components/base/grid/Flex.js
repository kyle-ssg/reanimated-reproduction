//propTypes: value: OptionalNumber

const Flex = class extends React.Component {
  render () {
    return (
      <View style={[this.props.style, { flex: this.props.value }]}>
        {this.props.children}
      </View>
    );
  }
};

Flex.defaultProps = {
  value: 1
};

Flex.propTypes = {
  value: OptionalNumber,
  children: OptionalElement,
  style: React.PropTypes.any
};

module.exports = Flex;
