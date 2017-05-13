import Menu from './menus/DefaultMenu';
import Modals from '../apis/modals';
const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        Modals(this);
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
    }

    render() {
        return (
            <Flex>
                {this.props.children}

                <Modal
                    animationType={"slide"}
                    visible={this.state.showModal?true:false}>
                    {this.state.modalComponent}
                </Modal>
                <Modal
                    animationType={"slide"}
                    visible={this.state.showSelect?true:false}>
                    {this.state.selectComponent}
                </Modal>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
