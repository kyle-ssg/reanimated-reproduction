/**
 * Created by kylejohnson on 29/07/2016.
 */
import {AutoSizer, InfiniteLoader, VirtualScroll} from 'react-virtualized';


const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    loadMore = () => {
        if (!this.props.isLoading)
            this.props.loadMore();
    }

    isRowLoaded = ({ index }) => {
        return index < this.props.data.length - this.props.threshold;
    }

    rowRenderer = ({ index }) => {
        return index < this.props.data.length ? this.props.renderRow(this.props.data[index]) : this.props.renderLoading
    }

    render () {
        const { isLoading, renderLoading, data, renderRow, containerHeight, rowHeight, threshold } = this.props;
        const rowCount = isLoading
            ? data.length + 1
            : data.length;

        return (
            <AutoSizer disableHeight={this.props.containerHeight ? true : false}>
                {({ height, width }) => (
                    <InfiniteLoader
                        rowCount={rowCount}
                        isRowLoaded={this.isRowLoaded}
                        loadMoreRows={this.loadMore}
                    >
                        {({ onRowsRendered, registerChild }) => (
                            <VirtualScroll
                                overscanRowCount={20}
                                rowCount={rowCount}
                                width={width}
                                height={containerHeight || height}
                                rowHeight={rowHeight}
                                ref={registerChild}
                                onRowsRendered={onRowsRendered}
                                rowRenderer={this.rowRenderer}
                            />
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        );
    }
};

TheComponent.propTypes = {
    isLoading: OptionalBool,
    renderLoading: OptionalObject,
    data: OptionalArray,
    renderRow: RequiredFunc,
    containerHeight: OptionalNumber,
    rowHeight: RequiredNumber,
    threshold: RequiredNumber,
};

module.exports = TheComponent;