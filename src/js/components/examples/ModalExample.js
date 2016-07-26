/**
 * Created by kylejohnson on 24/07/2016.
 */

module.exports = class extends React.Component {

    openModal = () => {
        openModal(<div>Hey</div>, <h3>Title</h3>);
    }

    openConfirm = () => {
        openConfirm(<div>Hey</div>, <h3>Title</h3>, () => alert("Yes"), () => alert("No"));
    }

    render () {
        return (
            <div>
                <h1>Simple Modal Example</h1>
                <div className="btn-group">
                    <button onClick={this.openModal} className="btn">
                        Modal
                    </button>
                    <button onClick={this.openConfirm} className="btn">
                        Confirm
                    </button>
                </div>
            </div>
        );
    }
};