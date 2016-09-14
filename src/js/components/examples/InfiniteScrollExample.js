const InfiniteScrollExample = class extends React.Component {
    displayName: 'InfiniteScrollExample'

    constructor (props, context) {
        super(props, context);
        this.state = {
            data: _.range(0, 100).map((num) => ({ key: num, height: this.getRandomHeight() })),
            randomRowHeights: false,
        };
    }

    getRandomHeight () {
        return Math.round(Math.random() * 60 + 40);
    }

    loadMore = () => {
        this.setState({
            isLoading: true,
        });
        setTimeout(()=> {
            const length = this.state.data.length;
            this.setState({
                isLoading: false,
                data: this.state.data.concat(_.range(length, length + 100)
                    .map((num) => ({ key: num, height: this.getRandomHeight() })))
            });
        }, 2000);
    }

    rowHeight = ({ index }) => {
        if (!this.state.randomRowHeights) {
            return 40;
        }

        return index < this.state.data.length ? this.state.data[index].height : 40;
    }

    onRandomRowHeightsChanged = (randomRowHeights) => {
        // @TODO Two updates happening here.. recomputeRowHeights() calls forceUpdate()
        this.setState({ randomRowHeights });
        this.virtualScroll.recomputeRowHeights();
    }

    virtualScrollRef = (virtualScroll) => this.virtualScroll = virtualScroll;

    renderRow (data) {
        return (
            <div className=".FlexTable__row" key={data.key}>
                Row {data.key + 1}
            </div>
        );
    }

    render () {
        return (
            <div>
                <h2>
                    Async Infinite scroll
                    <Tooltip place="right">
                        Performant infinite scroll
                    </Tooltip>
                </h2>
                <InfiniteScroll
                    renderLoading={(
                        <div style={{ height: 40 }}>
                            Loading...
                        </div>
                    )}
                    rowHeight={this.rowHeight}
                    containerHeight={200}
                    threshold={50}
                    data={this.state.data}
                    isLoading={this.state.isLoading}
                    loadMore={this.loadMore}
                    renderRow={this.renderRow}
                    virtualScrollRef={this.virtualScrollRef}
                />
                Use random row heights ?
                <Switch value={this.state.randomRowHeights} onChange={this.onRandomRowHeightsChanged}/>
            </div>
        );
    }
};

InfiniteScrollExample.propTypes = {};

module.exports = InfiniteScrollExample;
