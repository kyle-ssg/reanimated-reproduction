//propTypes: value: OptionalNumber

const Flex = class extends React.Component {
  render () {
    return (
      <div {... this.props} className={(this.props.className||'') + ' flex flex-1'}>
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
