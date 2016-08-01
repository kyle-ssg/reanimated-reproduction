/**
 * Created by kylejohnson on 29/07/2016.
 */
import {AutoSizer, InfiniteLoader, VirtualScroll} from 'react-virtualized';

const InfiniteScroll = class extends React.Component {
    displayName:'InfiniteScroll'

    loadMore = () => {
        if (!this.props.isLoading)
            this.props.loadMore();
    }

    isRowLoaded = ({ index }) => (
        index < this.props.data.length - this.props.threshold
    )

    rowRenderer = ({ index }) => {
        if (index < this.props.data.length) {
            return this.props.renderRow(this.props.data[index]);
        }

        return this.props.renderLoading;
    }

    render () {
        const { isLoading, data, containerHeight, rowHeight, scrollToRow } = this.props;
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
                                scrollToIndex={scrollToRow}
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

InfiniteScroll.propTypes = {
    isLoading: OptionalBool,
    loadMore: RequiredFunc,
    scrollToRow: OptionalNumber,
    renderLoading: OptionalObject,
    renderRow: RequiredFunc,
    data: OptionalArray,
    containerHeight: OptionalNumber,
    rowHeight: RequiredNumber,
    threshold: RequiredNumber,
};

module.exports = InfiniteScroll;