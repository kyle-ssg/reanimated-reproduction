//propTypes: value: OptionalNumber

const Flex = class extends React.Component {
  render () {
    return (
      <div className={this.props.className} style={{ display: 'flex', flex: this.props.value }}>
        {this.props.children}
      </div>
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
