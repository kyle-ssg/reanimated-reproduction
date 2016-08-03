/**
 * Created by kylejohnson on 29/03/2016.
 */

const StarRating = class extends React.Component {

    static defaultProps = {
        max: 5,
        value: 0,
        icon: "circle",
        editable: false,
        onChange: null
    }

    constructor (props, context) {
        super(props, context);
        this.state = {
            id: Utils.GUID()
        };
    }

    componentWillReceiveProps (newProps) {
        if (newProps.value != this.props.value) {
            this.setState({
                value: newProps.value
            });
        }
    }

    getStar (val) {
        var className = this.props.value < val ? "star-rating empty fa fa-" + this.props.icon + "-o" : "star-rating full fa fa-" + this.props.icon;
        if (this.props.editable) {
            className += " editable";
        }
        return className;
    }

    setRating = (newValue) => {
        this.props.onChange(parseInt(Utils.safeParseEventValue(newValue)));
    }

    render () {
        return (
            <ul className="rating-component list-unstyled">
                {_.range(1, this.props.max + 1).map(function (star) {
                    return (
                        <li key={this.state.id + star} onClick={()=>this.props.editable && this.setRating(star)}
                            className={this.getStar(star)}/>
                    );
                }.bind(this))}
            </ul>
        );
    }
};

StarRating.propTypes = {
    value: OptionalNumber,
    icon: OptionalString,
    max: OptionalNumber,
    editable: OptionalBool,
    onChange: OptionalFunc
};

module.exports = StarRating;