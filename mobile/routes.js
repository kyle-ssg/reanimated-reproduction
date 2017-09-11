import {Navigation} from "react-native-navigation";

//BASE Routes
Navigation.registerComponent('/', () => require('./components/pages/ExamplesPage'));
Navigation.registerComponent('/webmodal', () => require('./components/base/NativeWebModal'));
Navigation.registerComponent('/select', () => require('./components/base/SelectModal'));
Navigation.registerComponent('/select-contact', () => require('./components/base/ContactSelectModal'));
Navigation.registerComponent('/about', () => require('./components/pages/AboutPage'));
Navigation.registerComponent('drawer', () => require('./components/SideMenu'));

//Used in auth example
Navigation.registerComponent('/login', () => require('./components/pages/LoginPage'));