// import Example from './examples/PushExample';
// import Example from './examples/InfiniteScrollExample';

import Example from './examples/Examples';
import NavBar from './navbars/NavbarDefault';
import Menu from './menus/DefaultMenu';

const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
        Modals(this);
    }

    componentDidMount() {
        ReactNative.BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }


    onMenuPress() {
        this.refs.menu.openMenu(true);
    }

    onBackPress = function () {
        var index = this.refs && this.refs.navigator && this.refs.navigator.state.routeStack.length;

        if (index && index > 1) {
            this.refs.navigator.pop();
            return true;
        }
        return false;
    }


    onMenuItemPressed(data) {
        if (data.id === 'logout') {
            return AppActions.logout();
        }
        this.refs.menu.openMenu();
        setTimeout(()=> {
            this.refs.navigator.push(data);
        }, 100)
    }

    closeMenu() {
        this.refs.menu.openMenu(false);
    }

    renderScene(route, navigator) {
        return (
            <Flex>
                <Example/>
            </Flex>
        );
    }

    render() {
        return (
            <View style={Styles.body}>
                <SideMenu ref="menu" menuPosition="right" menu={<Menu closeMenu={this.closeMenu.bind(this)}
                                                                      onPress={this.onMenuItemPressed.bind(this)}/>}>
                    <View style={Styles.body}>
                        <Navigator
                            navigationBar={<Navigator.NavigationBar
                                style={Styles.navBar}
                                routeMapper={NavBar({onMenuPress: this.onMenuPress.bind(this)})}
                            />}
                            sceneStyle={Styles.navContent}
                            ref="navigator"
                            initialRoute={{id: 'home', title: 'Home'}}
                            renderScene={this.renderScene.bind(this)}
                        />
                    </View>
                </SideMenu>
                {this.state.modalComponent && (
                    <Modal
                        autostart={true}
                        direction={this.state.modalDirection}
                        animation={this.state.modalAnimation}
                        onDismiss={closeModal}
                        duration={this.state.modalDuration}
                        fade={this.state.modalFade}
                        size={this.state.modalSize} value={this.state.showModal}>
                        {this.state.modalComponent}
                    </Modal>
                )}
                {this.state.selectComponent && (
                    <Modal direction={this.state.selectDirection}
                           animation={this.state.selectAnimation}
                           onDismiss={closeSelect}
                           duration={this.state.selectDuration}
                           fade={this.state.selectFade}
                           size={this.state.selectSize}
                           value={this.state.showSelect}>
                        {this.state.selectComponent}
                    </Modal>
                )}
            </View>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
