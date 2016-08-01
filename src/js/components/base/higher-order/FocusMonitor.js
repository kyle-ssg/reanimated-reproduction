//Provides a simple way to track when you click outside of parent component
//Useful for autocompletes / popovers etc

const FocusMonitor = class extends React.Component {
    displayName:'FocusMonitor'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    focusChanged  = (hasFocus) => {
        if (hasFocus !== this.state.hasFocus) {
            this.setState({
                hasFocus
            });
            this.props.onFocusChanged(hasFocus);
        }
    }

    _clickDocument = (e)  => {
        var component = ReactDOM.findDOMNode(this.refs.component);
        if (e.target == component || $(component).has(e.target).length) {
            this.focusChanged(true);
        } else {
            this.focusChanged(false);
        }
    }

    componentDidMount () {
        window.addEventListener('mousedown', this._clickDocument, false);
    }

    componentWillUnmount () {
        window.removeEventListener('mousedown', this._clickDocument, false);
    }

    render () {
        return (
            <div ref="component" className="focus-monitor">
                {this.props.children}
            </div>
        );
    }
};

FocusMonitor.propTypes = {
    onFocusChanged: RequiredFunc,
    children: RequiredElement
};

module.exports = FocusMonitor;