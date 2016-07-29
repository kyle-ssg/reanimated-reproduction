// import Example from './examples/LoginExample';
// import Example from './examples/PushExample';
import Example from './examples/InfiniteScrollExample';

const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <Flex>
               <Example/>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;