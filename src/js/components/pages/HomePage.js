import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import NavigableList from '../examples/NavigableList';
import InfiniteScrollExample from '../examples/InfiniteScrollExample';
import PagedListExample from '../examples/PagedListExample';
import MaterialExample from '../examples/FormExamples';
import ReverseInfiniteScrollExample from '../examples/ReverseInfiniteScrollExample';
import ToastExample from '../examples/ToastExample';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = { route: 'login', loading: true };
        setTimeout(()=> this.setState({ loading: false }), 500);
    }

    render = () => {
        const loading = this.state.loading;
        return loading ? <div className="centered-container"><Loader/></div> : (
            <div className="app-container container">
                <NavigableList/>
                <Divider/>
                <InfiniteScrollExample/>
                <Divider/>
                <ReverseInfiniteScrollExample/>
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
                <ToastExample/>
                <Divider/>
            </div>
        )
    }
};
