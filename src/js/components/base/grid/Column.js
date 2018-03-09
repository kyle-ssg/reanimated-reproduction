//propTypes: value: OptionalNumber

const Flex = class extends React.Component {
	render() {
		return (
			<div {... this.props} className={(this.props.className || '') + ' flex-column'}>
				{this.props.children}
			</div>
		);
	}
};

Flex.defaultProps = {
	value: 1
};

Flex.propTypes = {
	className: OptionalString,
	value: OptionalNumber,
	children: OptionalNode,
	style: React.PropTypes.any
};

module.exports = Flex;
