/**
 * Created by niallquinn on 04/08/2016.
 */

module.exports = class extends React.Component {

  triggerToast() {
    toast(
      <div>
        Piece of trash
      </div>
    );
  }

  render() {
    return (

      <button className="btn-danger btn-outline-success" onClick={this.triggerToast} role="alert">
        <strong>Click to trigger toast</strong>
      </button>

    );
  }

};

