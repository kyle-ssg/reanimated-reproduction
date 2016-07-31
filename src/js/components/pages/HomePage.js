import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import InfiniteScrollExample from '../examples/InfiniteScrollExample';
import PagedListExample from '../examples/PagedListExample';
import MaterialExample from '../examples/MaterialExample';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = { route: 'login' };
    }

    render = () => (
        <div>
            <Divider/>
            <InfiniteScrollExample/>
            <Divider/>
            <PagedListExample/>
            <Divider/>
            <BigDataExample/>
            <Divider/>
            <LoginExample/>
            <Divider/>
            <ShareExample/>
            <Divider/>
            <ModalExample/>
            <Divider/>
            <MaterialExample/>
        </div>
    )
};