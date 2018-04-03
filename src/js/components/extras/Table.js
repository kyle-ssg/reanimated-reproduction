import React, {Component, PropTypes} from 'react';
//Requires react-table
const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		const {...props} = this.props;
		return (
			<ReactTable
				{...props}
			/>
		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
