const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    onMouseUp =() => {
        this.refs.button.blur();
    }

    render () {
        return (
            <button ref="button" {... this.props} onMouseUp={this.onMouseUp} className={"btn  " + (this.props.className || "btn-primary")}>
                {this.props.children}
            </button>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;