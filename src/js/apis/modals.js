const Provider = class extends React.Component {

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this._closed);
        $(ReactDOM.findDOMNode(this)).on('shown.bs.modal', this._shown);
        $(ReactDOM.findDOMNode(this)).modal({ background: true, keyboard: true, show: true });
    }

    show() {
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.unmount);
        $(ReactDOM.findDOMNode(this)).modal('show');
    }

    close() { //use when you wish to trigger closing manually
        $(ReactDOM.findDOMNode(this)).off('hidden.bs.modal', this._closed);
        $(ReactDOM.findDOMNode(this)).off('shown.bs.modal', this._shown);
        $(ReactDOM.findDOMNode(this)).modal('hide');
        ReactDOM.unmountComponentAtNode(document.getElementById('modal'));
        document.body.classList.remove('modal-open');
    }

    _closed = ()=> {
        this.props.onClose && this.props.onClose();
        ReactDOM.unmountComponentAtNode(document.getElementById('modal'));
        document.body.classList.remove('modal-open');
    }

    _shown() {
        this.isVisible = true;
    }

    render() {
        return this.props.children;
    }
};

Provider.propTypes = {
    children: RequiredElement,
    onClose: OptionalFunc
};

const Modal = class extends React.Component {
    header() {
        return this.props.header || '';
    }

    body() {
        return this.props.body || '';
    }

    footer() {
        return this.props.footer || '';
    }

    render() {

        return (
            <Provider ref="modal">
                <div tabIndex="-1" className="modal alert fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">{this.header()}</div>
                            <div className="modal-body">{this.body()}</div>
                            <div className="modal-footer">{this.footer()}</div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
};

Modal.propTypes = {
    header: OptionalElement,
    body: OptionalElement,
    footer: OptionalElement
};

const Confirm = class extends React.Component {
    header() {
        return this.props.header || '';
    }

    body() {
        return this.props.body || '';
    }

    onNo = ()=> {
        if (this.props.onNo) {
            this.props.onNo();
        }
        this.refs.modal.close();
    }

    onYes = ()=> {
        this.props.onYes();
        this.refs.modal.close();
    }

    closed() {
        this.onNo();
    }

    footer() {
        return (
            <div className="modal-button">
                <button type="button" className="btn btn-red short"
                        onClick={this.onNo}>{this.props.noText || 'No'}</button>
                <button type="button" className="btn btn-green short"
                        onClick={this.onYes}>{this.props.yesText || 'Yes'}</button>
            </div>
        );
    }

    render() {
        return (
            <Provider onClose={this.props.onNo} ref="modal">
                <div tabIndex="-1" className="modal alert fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">{this.header()}</div>
                            <div className="modal-body">{this.body()}</div>
                            <div className="modal-footer">{this.footer()}</div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
};

Confirm.propTypes = {
    header: OptionalElement,
    body: OptionalElement,
    onYes: OptionalFunc,
    onNo: OptionalFunc,
    yesText: OptionalString,
    noText: OptionalString,
};

exports.openModal = (body, header, footer) => {
    render(<Modal header={header} footer={footer} body={body}/>, document.getElementById('modal'));
};

exports.openConfirm = (body, header, onYes, onNo) => {
    render(<Confirm header={header} onYes={onYes} onNo={onNo} body={body}/>, document.getElementById('modal'));
};