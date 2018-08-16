import {Navigation} from "react-native-navigation";

//BASE Routes
Navigation.registerComponent('/', () => require('./screens/example/ExampleScreen'));
Navigation.registerComponent('/webmodal', () => require('./components/base/NativeWebModal'));
Navigation.registerComponent('/select', () => require('./components/base/SelectModal'));
Navigation.registerComponent('/select-contact', () => require('./components/base/ContactSelectModal'));

//Example routes
Navigation.registerComponent('/about', () => require('./screens/example/AboutPage'));
Navigation.registerComponent('/examples/interactive', () => require('./screens/example/InteractivePage'));
Navigation.registerComponent('/examples/lightbox', () => require('./screens/example/ExampleLightbox'));

// Components
Navigation.registerComponent('side-menu', () => require('./components/SideMenu'));
