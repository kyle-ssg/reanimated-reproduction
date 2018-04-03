//Useful for components used all the time within a project

import Row from '../components/base/grid/Row'
global.Row = Row;

import FormInline from '../components/base/grid/FormInline'
global.FormInline = FormInline;

import Flex from '../components/base/grid/Flex'
global.Flex = Flex;

import FormGroup from '../components/base/grid/FormGroup'
global.FormGroup = FormGroup;

import Column from '../components/base/grid/Column'
global.Column = Column;

import Button from '../components/base/forms/Button'
global.Button = Button;


import InputGroup from '../components/base/forms/InputGroup'
global.InputGroup = InputGroup;

import Input from '../components/base/forms/Input'
global.Input = Input;




window.AccountProvider = require('../common/providers/AccountProvider');
window.Divider = require('../components/Divider');
window.Tooltip = require('../components/Toolip');
window.Expand = require('../components/Expand');
window.Loader = () => (
	<svg version="1.1" id="loader-1" x="0px" y="0px"
		 width="40px" height="40px" viewBox="0 0 50 50" style={{enableBackground: '0 0 50 50'}}>
		<path fill="#4f98a3"
			  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
			<animateTransform attributeType="xml"
							  attributeName="transform"
							  type="rotate"
							  from="0 25 25"
							  to="360 25 25"
							  dur="0.6s"
							  repeatCount="indefinite"/>
		</path>
	</svg>
);

const ION = (props) => {
	var classNames = {};

	classNames['ion-' + props.name] = true;

	return (
		<span className={cn(classNames)}></span>
	);
};

ION.propTypes = {
	name: React.PropTypes.string
};

window.ION = ION;


