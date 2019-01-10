const NetworkIndicator = Component({
    displayName: 'NetworkIndicator',
    componentDidMount() {
        NetInfo.addEventListener(
            'change',
            this._handleReachabilityChange,
        );
        NetInfo.fetch().done(
            this._handleReachabilityChange,
        );
    },
    getInitialState() {
        return { isConnected: true };
    },
    componentWillUnmount() {
        NetInfo.removeEventListener(
            'change',
            this._handleReachabilityChange,
        );
    },
    _handleReachabilityChange(isConnected) {
        this.setState({
            isConnected: isConnected != 'none',
        });
        this.props.onChange && this.props.onChange(isConnected != 'none');
    },
    render() {
        return (
            <Scale style={styles.bar} duration={200} value={!this.state.isConnected}>
                <Text style={styles.barText}>No internet connection.</Text>
            </Scale>
        );
    },
});


module.exports = NetworkIndicator;
