'use strict';

var Button = Component({
  displayName: 'NetworkIndicator',
  componentDidMount: function () {
    NetInfo.addEventListener(
      'change',
      this._handleReachabilityChange
    );
    NetInfo.fetch().done(
      this._handleReachabilityChange
    );
  },
  getInitialState: function () {
    return { isConnected: true }
  },
  componentWillUnmount: function () {
    NetInfo.removeEventListener(
      'change',
      this._handleReachabilityChange
    );
  },
  _handleReachabilityChange: function (isConnected) {
    console.log(isConnected);
    this.setState({
      isConnected: isConnected != "none"
    });
    this.props.onChange && this.props.onChange(isConnected != "none");
  },
  render: function () {
    return (
      <Scale style={styles.bar} duration={200} value={!this.state.isConnected}>
        <Text style={styles.barText}>No internet connection.</Text>
      </Scale>
    )
  },
});

var styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: colour.alert
  },
  barText: {
    color: 'white',
    textAlign: 'center'
  }

});

module.exports = Button;
