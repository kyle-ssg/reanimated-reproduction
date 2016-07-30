const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = { data: _.range(0, 100) };
    }

    loadMore = () => {
        this.setState({
            isLoading: true
        });
        setTimeout(()=> {
            const length = this.state.data.length;
            this.setState({
                isLoading: false,
                data: this.state.data.concat(_.range(length, length + 100))
            });
        }, 500);
    }

    renderRow (data) {
        return (
            <div key={data} style={{ height: 40 }}>
                hey {data}
            </div>
        );
    }

    render () {
        return (
            <div>
                <h2>Infinite scroll</h2>
                <InfiniteScroll
                    renderLoading={(
                        <div className="infinite-list-item">
                            Loading...
                        </div>
                    )}
                    elementHeight={40}
                    containerHeight={200}
                    data={this.state.data}
                    isLoading={this.state.isLoading}
                    loadMore={this.loadMore}
                    renderRow={this.renderRow}
                />
            </div>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;