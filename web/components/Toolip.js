const ReactTooltip = require('react-tooltip');

const Tooltip = class extends React.Component {
	displayName: 'Tooltip'



	render() {
		const id = Utils.GUID();
		return (
			<span className="question-tooltip">
				{this.props.title ? <span data-for={id} data-tip>{this.props.title}</span> : <span className="ion ion-ios-help" data-for={id} data-tip/>}
                <ReactTooltip id={id} place={this.props.place || "top"} type="dark" effect="solid">
                    {this.props.children}
                </ReactTooltip>
            </span>
		);
	}
};

Tooltip.propTypes = {
	children: propTypes.node,
	place: propTypes.string
};

module.exports = Tooltip;
