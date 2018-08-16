import Dispatcher  from '../../common-mobile/dispatcher/dispatcher';
import AppActions  from '../../common-mobile/dispatcher/app-actions';
import Actions  from '../../common-mobile/dispatcher/action-constants';
global.Dispatcher = Dispatcher;
global.AppActions = AppActions;
global.Actions = Actions;


window.Component = require('../../common-mobile/Component');
window.ES6Component = require('../../common-mobile/ES6Component');

//Animation
window.Fade = require('../components/base/animation/Fade');
window.SlideUp = require('../components/base/animation/SlideUp');


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
window.Checkbox = require('../components/base/forms/Checkbox');
window.TextInput = require('../components/base/forms/TextInput');
window.Button = require('../components/base/forms/Button');
window.Loader = require('../components/base/Loader');
window.Select = require('../components/base/forms/Select');

//Navs
window.Delay = require('../components/base/Delay');
window.ListItem = require('../components/base/ListItem');
window.InfiniteScroll = require('../components/base/InfiniteScroll');
