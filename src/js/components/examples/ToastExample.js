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
      <div>
        <h1>Toast example</h1>
        <button className="btn btn-primary" onClick={this.triggerToast} role="alert">
          <strong>Click to trigger toast</strong>
        </button>
      </div>

    );
  }

};

