import FireAuth from '../../../apis/firebase/fire-auth';

const TheComponent = class extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName
        };
    }

    handleSubmit = () => {
        console.log(this.state);
        console.log(FireAuth);
        FireAuth.update({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
            .then(this.props.onSubmit)
            .catch((err)=> {
                this.setState({ error: err.message });
            });
    }

    render () {
        return (
            <div>
                <FormGroup
                    value={this.state.firstName}
                    title="First Name"
                    placeholder="Joe" type="text"
                    onChange={(e)=>this.setState({ firstName: Utils.safeParseEventValue(e) })}/>

                <FormGroup
                    value={this.state.lastName}
                    title="Last Name"
                    placeholder="Blogs" type="text"
                    onChange={(e)=>this.setState({ lastName: Utils.safeParseEventValue(e) })}/>

                {this.state.error && (
                    <div className="alert alert-danger">{this.state.error}</div>
                )}
                <button onClick={this.handleSubmit}>
                    Send
                </button>
            </div>
        );
    }
};

TheComponent.propTypes = {
    onSubmit: OptionalFunc,
    firstName: OptionalString,
    lastName: OptionalString
};

module.exports = TheComponent;