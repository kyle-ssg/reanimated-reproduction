import { Component } from 'react';
import propTypes from 'prop-types';
import NetworkStore from '../stores/network-store';


class NetworkProvider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isConnected: NetworkStore.isConnected,
        };

        ES6Component(this);
    }

    componentWillMount() {
        this.listenTo(NetworkStore, 'change', () => {
            this.setState({ isConnected: NetworkStore.isConnected });
        });
    }

    render() {
        const { state: { isConnected }, props: { children } } = this;
        return children(isConnected);
    }
}

NetworkProvider.propTypes = {
    children: propTypes.node,
};
export default NetworkProvider;
