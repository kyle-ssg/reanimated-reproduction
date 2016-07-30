import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import CenteredFlexExample from '../examples/CenteredFlexExample';
import ComponentsExample from '../examples/ComponentsExample';
import ReverseInfiniteScrollExample from '../examples/ReverseInfiniteScrollExample';
import InfiniteScrollExample from '../examples/InfiniteScrollExample';
import PagedListExample from '../examples/PagedListExample';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = { route: 'login' };
    }

    render = () => (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <InfiniteScrollExample/>
                </div>
                <div className="col-md-6">
                    <ReverseInfiniteScrollExample/>
                </div>
            </div>
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
            <ComponentsExample/>
            <Divider/>
            <CenteredFlexExample/>
        </div>
    )
};