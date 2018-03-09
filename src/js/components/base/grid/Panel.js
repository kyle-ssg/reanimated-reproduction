const Panel = class extends React.Component {
	displayName: 'Panel'

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					{this.props.title}
					{this.props.icon}
				</div>
				<div className="panel-content">
					{this.props.children}
				</div>
			</div>
		);
	}
};

Panel.displayName = "Panel";

Panel.propTypes = {
	title: oneOfType([OptionalObject, OptionalString]),
	icon: OptionalObject,
	children: OptionalNode
};

module.exports = Panel;
