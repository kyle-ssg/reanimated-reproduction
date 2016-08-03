import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import NavigableList from '../examples/NavigableList';
import InfiniteScrollExample from '../examples/InfiniteScrollExample';
import PagedListExample from '../examples/PagedListExample';
import MaterialExample from '../examples/FormExamples';

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = { route: 'login' };
    }

    render = () => (
        <div>
            <NavigableList/>
            <h2>
                Flex centered container
                <Tooltip>
                    The centeredContainer class uses justify-content and align-items
                </Tooltip>
            </h2>
            <div className="centeredContainer" style={{ width: 100, height: 100, border: '1px solid' }}>
                I'm always centered
            </div>
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