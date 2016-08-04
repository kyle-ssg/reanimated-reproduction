import './libs';

window.React = require('react');
window.ReactDOM = require('react-dom');
window.render = require('react-dom').render;
window.moment = require('moment/min/moment.min');
window.fetch = require('fetchify')(Promise).fetch;
window._ = {
  indexOf: require('lodash.indexof'),
  findIndex: require('lodash.findindex'),
  merge: require('lodash.merge'),
  orderBy: require('lodash.orderby'),
  range: require('lodash.range'),
  each: require('lodash.foreach')
};

window.OptionalArray = React.PropTypes.array;
window.OptionalBool = React.PropTypes.bool;
window.OptionalFunc = React.PropTypes.func;
window.OptionalNumber = React.PropTypes.number;
window.OptionalObject = React.PropTypes.object;
window.OptionalString = React.PropTypes.string;
window.OptionalNode = React.PropTypes.node;
window.OptionalElement = React.PropTypes.node;
window.oneOf = React.PropTypes.oneOf;
window.RequiredArray = React.PropTypes.array.isRequired;
window.RequiredBool = React.PropTypes.bool.isRequired;
window.RequiredFunc = React.PropTypes.func.isRequired;
window.RequiredNumber = React.PropTypes.number.isRequired;
window.RequiredObject = React.PropTypes.object.isRequired;
window.RequiredString = React.PropTypes.string.isRequired;
window.RequiredNode = React.PropTypes.node.isRequired;
window.RequiredElement = React.PropTypes.node.isRequired;

window.Project = require('../common/project');
window.Dispatcher = require('../common/dispatcher/dispatcher');
window.AppActions = require('../common/dispatcher/app-actions');
window.Actions = require('../common/dispatcher/action-constants');
window.Format = require('../common/utils/format');
window.ES6Component = require('./../common/ES6Component');

window.AjaxHandler = require('./ajax-handler');
window.Utils = require('../common/utils/utils');
window.Format = require('../common/utils/format');
window.Constants = require('./constants');

//Useful components
window.FormInline = require('../components/base/grid/FormInline');
window.Row = require('../components/base/grid/Row');
window.Flex = require('../components/base/grid/Flex');
window.Input = require('../components/base/forms/Input');
window.Button = require('../components/base/forms/Button');
window.Panel = require('../components/base/grid/Panel');
window.FormGroup = require('../components/base/grid/FormGroup');
window.InputGroup = require('../components/base/forms/InputGroup');
window.InfiniteScroll = require('../components/base/InfiniteScroll');
window.ListView = require('../components/base/ListView');
window.Highlighter = require('../components/base/Highlighter');

//Modal
window.openModal = require('../apis/modals').openModal;
window.openConfirm = require('../apis/modals').openConfirm;

require('./project-components');

/*eslint no-console:0*/
window.log = function () {
  if (Project.debug) {
    console.log(arguments);
  }
};

window.info = function () {
  if (Project.debug) {
    console.info(arguments);
  }
};

window.warn = function () {
  if (Project.debug) {
    console.warn(arguments);
  }
};
