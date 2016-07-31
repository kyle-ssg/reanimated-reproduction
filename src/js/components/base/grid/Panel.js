const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.title}
                    {this.props.icon}
                </div>
                <div className="panel-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

TheComponent.propTypes = {
    title: OptionalObject,
    icon: OptionalObject,
    children: OptionalElement
};

module.exports = TheComponent;