// eslint-disable-next-line
import { NetInfo } from 'react-native';

const BaseStore = require('./base/_store');


const store = Object.assign({}, BaseStore, {
    id: 'network',
    isConnected: true,
});

const handleIsConnected = (isConnected) => {
    if (isConnected !== store.isConnected) {
        store.isConnected = isConnected;
        store.changed();
        if (isConnected) {
            AppActions.connected(isConnected);
        } else {
            AppActions.disconnected(isConnected);
        }
    }
};

NetInfo.isConnected.fetch().then(handleIsConnected);
NetInfo.isConnected.addEventListener(
    'change',
    handleIsConnected,
);

export default store;
