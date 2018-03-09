import React, {Component, PropTypes} from 'react';

const RenderCount = class extends Component {
	displayName: 'RenderCount';

	constructor(props, context) {
		super(props, context);
		this.count = 1;
	}

	componentWillUpdate() {
		this.count++;
	}

	render() {
		return (
			<div>{this.count}</div>
		);
	}
};

RenderCount.propTypes = {};

module.exports = RenderCount;
