import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import CenteredFlexExample from '../examples/CenteredFlexExample';
import ComponentsExample from '../examples/ComponentsExample';

module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { route: 'login' };
    }

    render = () => (
        <div>
            <LoginExample/>
            <Divider/>
            <ShareExample/>
            <Divider/>
            <ModalExample/>
            <Divider/>
            <BigDataExample/>
            <Divider/>
            <CenteredFlexExample/>
            <Divider/>
            <ComponentsExample/>
        </div>
    )
};