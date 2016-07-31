/**
 * Created by kylejohnson on 29/07/2016.
 */
import {AutoSizer, VirtualScroll} from 'react-virtualized';

const InfiniteScroll = class extends React.Component {
    displayName:'ListView'

    rowRenderer = ({ index }) => {
        if (index < this.props.data.length) {
            return this.props.renderRow(this.props.data[index], index);
        }
        return null;
    }

    render () {
        const { data, containerHeight, rowHeight } = this.props;
        const rowCount =  data.length;

        return (
            <AutoSizer disableHeight={this.props.containerHeight ? true : false}>
                {({ height, width }) => (
                    <VirtualScroll
                        overscanRowCount={20}
                        rowCount={rowCount}
                        width={width}
                        scrollToIndex={this.props.scrollToRow}
                        height={containerHeight || height}
                        rowHeight={rowHeight}
                        rowRenderer={this.rowRenderer}
                    />
                )}
            </AutoSizer>
        );
    }
};

InfiniteScroll.propTypes = {
    scrollToRow: OptionalNumber,
    renderRow: RequiredFunc,
    data: OptionalArray,
    containerHeight: OptionalNumber,
    rowHeight: RequiredNumber,
};

module.exports = InfiniteScroll;