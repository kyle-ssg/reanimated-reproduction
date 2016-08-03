/**
 * Created by kylejohnson on 29/07/2016.
 */
import {AutoSizer, VirtualScroll} from 'react-virtualized';

const ListView = class extends React.Component {
  displayName:'ListView'

  forceUpdateGrid = () => {
    this.refs.resizer.refs.list.forceUpdateGrid();
  }

  rowRenderer = ({ index }) => {
    if (index < this.props.data.length) {
      return this.props.renderRow(this.props.data[index], index);
    } else if (!this.props.data.length) {
      return this.props.renderNoResults;
    }
    return null;
  }

  render () {
    const { data, containerHeight, rowHeight } = this.props;
    const rowCount = data.length;

    return (
      <AutoSizer ref="resizer" disableHeight={this.props.containerHeight ? true : false}>
        {({ height, width }) => (
          <VirtualScroll
            ref="list"
            className={this.props.className}
            overscanRowCount={20}
            rowCount={rowCount + 1}
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

ListView.defaultProps = {
  renderNoResults: <div>No Results</div>
};

ListView.propTypes = {
  className: OptionalString,
  renderNoResults: OptionalElement,
  scrollToRow: OptionalNumber,
  renderRow: RequiredFunc,
  data: OptionalArray,
  containerHeight: OptionalNumber,
  rowHeight: RequiredNumber,
};

module.exports = ListView;
