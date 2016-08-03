'use strict';

var Button = Component({
  displayName: 'Text',
  render: function () {
    return <ReactNative.Text style={[Styles.text, this.props.style]}>{this.props.children}</ReactNative.Text>
  },

});


module.exports = Button;
