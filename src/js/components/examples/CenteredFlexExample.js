module.exports = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            width: 200,
            height: 200
        };
    }

    change = (newSize) => {
        this.setState({
            width: newSize,
            height: newSize
        });
    };

    less = () => {
        this.change(Math.max(this.state.width - 100, 100));
    };

    more = () => {
        this.change(this.state.width + 100);
    };

    render() {
        return (
            <div>
                <h1>Flexbox</h1>
                <div className="btn-group">
                    <button onClick={this.more} className="btn">
                        +
                    </button>
                    <button disabled={this.state.width === 100} onClick={this.less} className="btn">
                        -
                    </button>
                </div>
                <Row>
                    {_.map(_.range(0, 100), (i) => (
                        <div
                            key={i}
                            className="animated-size centered-container"
                            style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                display:'flex',
                                height: this.state.height,
                                width: this.state.width
                            }}>
                            <h1 className="animated-font" style={{ margin: 0, fontSize: this.state.width / 5 }}>
                                Middle
                            </h1>
                        </div>
                    ))}
                </Row>
            </div>
        );
    }
};