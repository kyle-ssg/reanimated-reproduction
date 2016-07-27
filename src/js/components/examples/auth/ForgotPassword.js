import FireAuth from '../../../common/fire-auth';

const TheComponent = class extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    handleSubmit = () => {
        FireAuth.resetPassword(this.state.email)
            .then(this.props.onSubmit)
            .catch((err)=> {
                this.setState({ error: err.message });
            });
    }

    render () {
        return (
            <div>
                <FormGroup
                    title="Email"
                    placeholder="email" type="email"
                    onChange={(e)=>this.setState({ email: Utils.safeParseEventValue(e) })}/>

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
    onSubmit: RequiredFunc
};

module.exports = TheComponent;