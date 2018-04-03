import './libs';

import '../../styles/styles.scss';
import '../../fonts/fontawesome-webfont.woff';
import '../../fonts/fontawesome-webfont.woff2';


import {hot} from 'react-hot-loader';
global.hot = hot

//Flux
window.Project = require('../common/project');
window.Dispatcher = require('../common/dispatcher/dispatcher');
window.AppActions = require('../common/dispatcher/app-actions');
window.Actions = require('../common/dispatcher/action-constants');
window.Format = require('../common/utils/format');
window.ES6Component = require('../common/ES6Component');

//Global utilities
window.AjaxHandler = require('./ajax-handler');
window.Utils = require('../common/utils/utils');
window.Format = require('../common/utils/format');
window.Constants = require('./constants');

//Modal
window.openModal = require('../apis/modals').openModal;
window.openConfirm = require('../apis/modals').openConfirm;



require('./project-components');
