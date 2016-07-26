import StarRating from '../base/StarRating';

module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    onValChange = (val) => {
        this.setState({val});
    }

    render() {
        return (
            <div>
                <h1>Components</h1>
                <Switch/>
                <StarRating icon={'star'} onChange={this.onValChange} editable={true} value={this.state.val} max={5}/>
            </div>
        );
    }
};