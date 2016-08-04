/**
 * Created by niallquinn on 04/08/2016.
 */

module.exports = class extends React.Component {

  triggerToast() {
    toast(
      <div>
        Example message
      </div>
    );
  }

  render() {
    return (

      <div onClick={this.triggerToast} role="alert">
        <strong>Click to trigger toast</strong>
      </div>

    );
  }

};

