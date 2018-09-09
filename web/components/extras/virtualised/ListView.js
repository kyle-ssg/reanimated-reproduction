/**
 * Created by kylejohnson on 29/07/2016.
 */
import { AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const ListView = class extends React.Component {
    displayName: 'ListView'

    constructor(props) {
        super(props);
        this.cache = new CellMeasurerCache({
            defaultHeight: 50,
            fixedWidth: true
        });
    }

    forceUpdateGrid = () => {
        this.refs.resizer.refs.list.forceUpdateGrid();
    }

    scrollToRow = (index) => {
        this.refs.resizer.refs.list.scrollToRow(index);
    }

    componentDidMount() {
        this.cacheTimer = setInterval(() => {
            this.cache.clearAll();
            this.refs.resizer.refs.list.forceUpdateGrid();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.cacheTimer);
    }

    rowRenderer = ({ index, key, parent, style }) => {
        if (index < this.props.data.length) {
            return (
                <CellMeasurer
                    cache={this.cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                >
                    <div style={style}>
                        {this.props.renderRow(this.props.data[index], index)}
                    </div>
                </CellMeasurer>
            );
        } else if (!this.props.data.length) {
            return this.props.renderNoResults;
        }
        return null;
    }

    render() {
        const { data, containerHeight, rowHeight, windowScrolling } = this.props;
        const rowCount = data.length;

        if (windowScrolling && !containerHeight) {
            return (
                <WindowScroller>
                    {({ height, isScrolling, scrollTop }) => (
                        <AutoSizer ref="resizer" disableHeight={true}>
                            {({ width }) => (
                                <List
                                    autoHeight
                                    ref="list"
                                    className={this.props.className}
                                    overscanRowCount={20}
                                    rowCount={rowCount}
                                    isScrolling={isScrolling}
                                    scrollTop={scrollTop}
                                    width={width}
                                    scrollToIndex={this.props.scrollToRow}
                                    height={height}
                                    deferredMeasurementCache={this.cache}
                                    rowHeight={rowHeight || this.cache.rowHeight}
                                    rowRenderer={this.rowRenderer}
                                />
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            )
        }

        return (
            <AutoSizer ref="resizer" disableHeight={this.props.containerHeight ? true : false}>
                {({ height, width }) => (
                    <List
                        ref="list"
                        className={this.props.className}
                        overscanRowCount={20}
                        rowCount={rowCount}
                        width={width}
                        scrollToIndex={this.props.scrollToRow}
                        height={containerHeight || height}
                        deferredMeasurementCache={this.cache}
                        rowHeight={rowHeight || this.cache.rowHeight}
                        rowRenderer={this.rowRenderer}
                    />
                )}
            </AutoSizer>
        );
    }
};

ListView.defaultProps = {
    renderNoResults: <div>No Results</div>,
    windowScrolling: true
};

ListView.propTypes = {
    className: propTypes.string,
    renderNoResults: propTypes.func,
    scrollToRow: propTypes.number,
    renderRow: propTypes.func,
    data: propTypes.array,
    rowHeight: propTypes.number,
    containerHeight: propTypes.number,
};

module.exports = ListView;
