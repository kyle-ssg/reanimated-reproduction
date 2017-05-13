var window = global || window;

window.React = require('react');
window.ReactNative = require('react-native');
window.document = {};

window._ = require('lodash');
window.moment = require('moment');
window.modalHeight = 95;
window.Project = require('../common/project');

//React Prop Types
window.OptionalArray = React.PropTypes.array;
window.OptionalBool = React.PropTypes.bool;
window.OptionalFunc = React.PropTypes.func;
window.OptionalNumber = React.PropTypes.number;
window.OptionalObject = React.PropTypes.object;
window.OptionalString = React.PropTypes.string;
window.OptionalNode = React.PropTypes.node;
window.OptionalElement = React.PropTypes.element;
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


//Access React Stuff
window.NativeModules = ReactNative.NativeModules;
window.Platform = ReactNative.Platform;
window.AppState = ReactNative.AppState;
window.ActivityIndicator = ReactNative.ActivityIndicator;
window.AlertIOS = ReactNative.AlertIOS;
window.Animated = ReactNative.Animated;
window.AppRegistry = ReactNative.AppRegistry;
window.AppState = ReactNative.AppState;
window.AsyncStorage = ReactNative.AsyncStorage;
window.DataSource = ReactNative.ListView.DataSource;
window.PanResponder = ReactNative.PanResponder;
window.DatePickerIOS = ReactNative.DatePickerIOS;
window.DeviceEventEmitter = ReactNative.DeviceEventEmitter;
window.Dimensions = ReactNative.Dimensions;
window.DeviceWidth = Dimensions.get("window").width;
window.DeviceHeight = Dimensions.get("window").height;
window.RefreshControl = ReactNative.RefreshControl;
window.Easing = ReactNative.Easing;
window.Image = ReactNative.Image;
window.InteractionManager = ReactNative.InteractionManager;
window.Linking = ReactNative.Linking;
window.ListView = ReactNative.ListView;
window.WindowedListView = ReactNative.WindowedListView;
global.Modal = ReactNative.Modal;
window.NativeAppEventEmitter = ReactNative.NativeAppEventEmitter;
window.NetInfo = ReactNative.NetInfo;
window.PixelRatio = ReactNative.PixelRatio;
window.ProgressViewIOS = ReactNative.ProgressViewIOS;
window.ScrollView = ReactNative.ScrollView;
window.ScrollView = ReactNative.ScrollView;
window.SliderIOS = ReactNative.SliderIOS;
window.StatusBar = ReactNative.StatusBar;
window.StatusBarIOS = ReactNative.StatusBarIOS;
window.StyleSheet = ReactNative.StyleSheet;
window.SwitchIOS = ReactNative.SwitchIOS;
window.TouchableHighlight = ReactNative.TouchableHighlight;
window.TouchableOpacity = ReactNative.TouchableOpacity;
window.TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback;
window.FlatList = ReactNative.FlatList;
window.View = ReactNative.View;
window.StatusBarIOS = ReactNative.StatusBarIOS;
window.WebView = ReactNative.WebView;

require('../style/style_screen');
require('./libs'); // optional libs

window.Component = require('../common/Component');
window.ES6Component = require('../common/ES6Component');
window.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

//Animation
window.AnimatedToggleMixin = require('./mixins/AnimatedToggleMixin');
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

//Navs
window.ListItem = require('../components/base/ListItem');
window.InfiniteScroll = require('../components/base/InfiniteScroll');

//Flux Stuff
window.Dispatcher = require('../common/dispatcher/dispatcher');
window.AppActions = require('../common/dispatcher/app-actions');
window.Actions = require('../common/dispatcher/action-constants');
window.Format = require('../common/utils/format');
window.AjaxHandler = require('./ajax-handler');
window.Utils = require('../common/utils/utils');
window.Constants = require('./constants');

require('./project-components'); // project specific components that are reused everyhwere

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
