//React Prop Types, todo: move to react-native-globals
window.Any = React.PropTypes.any;
window.OptionalArray = React.PropTypes.array;
window.OptionalBool = React.PropTypes.bool;
window.OptionalFunc = React.PropTypes.func;
window.OptionalNumber = React.PropTypes.number;
window.OptionalObject = React.PropTypes.object;
window.OptionalString = React.PropTypes.string;
window.OptionalNode = React.PropTypes.node;
window.OptionalElement = React.PropTypes.node;
window.oneOf = React.PropTypes.oneOf;
window.oneOfType = React.PropTypes.oneOfType;
window.RequiredArray = React.PropTypes.array.isRequired;
window.RequiredBool = React.PropTypes.bool.isRequired;
window.RequiredFunc = React.PropTypes.func.isRequired;
window.RequiredNumber = React.PropTypes.number.isRequired;
window.RequiredObject = React.PropTypes.object.isRequired;
window.RequiredString = React.PropTypes.string.isRequired;
window.RequiredNode = React.PropTypes.node.isRequired;
window.RequiredElement = React.PropTypes.node.isRequired;


window.Component = require('../common/Component');
window.ES6Component = require('../common/ES6Component');

//Animation
window.AnimatedToggleMixin = require('../components/base/animation/AnimatedToggleMixin');
window.Fade = require('../components/base/animation/Fade');
window.SlideDown = require('../components/base/animation/SlideDown');
window.SlideUp = require('../components/base/animation/SlideUp');
window.Expand = require('../components/base/animation/Expand');
window.Scale = require('../components/base/animation/Scale');
window.Expand = require('../components/base/animation/Expand');

//Typography
window.Text = require('../components/base/forms/Text');
window.Strong = window.Bold = require('../components/base/type/Bold');
window.H1 = require('../components/base/type/H1');
window.H2 = require('../components/base/type/H2');
window.H3 = require('../components/base/type/H3');
window.H4 = require('../components/base/type/H4');

//Grid
window.Flex = require('../components/base/grid/Flex');
window.Container = require('../components/base/grid/Container');
window.FormGroup = require('../components/base/grid/FormGroup');
window.Column = require('../components/base/grid/Column');
window.Row = require('../components/base/grid/Row');

//Forms
window.Switch = require('../components/base/forms/Switch');
window.TextInput = require('../components/base/forms/TextInput');
window.Radio = require('../components/base/forms/Radio');
window.Checkbox = require('../components/base/forms/Checkbox');
window.Button = require('../components/base/forms/Button');
window.Divider = require('../components/base/Divider');
window.Loader = require('../components/base/Loader');
window.Card = require('../components/base/forms/Card');
window.Select = require('../components/base/forms/Select');

//Navs
window.Delay = require('../components/base/Delay');
window.ListItem = require('../components/base/ListItem');
window.InfiniteScroll = require('../components/base/InfiniteScroll');
