import { WindowScroller, InfiniteLoader, AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const InfiniteLoadingList = class extends React.Component {
	displayName: 'InfiniteLoadingList'

	constructor(props, context) {
		super(props, context);
		this.state = {};
		this.cache = new CellMeasurerCache({
			defaultHeight: 50,
			fixedWidth: true
		});
	}

	isRowLoaded = ({ index }) => !this.props.hasNextPage || index < this.props.data.length;

	rowRenderer = ({ index, key, parent, style }) => {
		var content;
		if (!this.isRowLoaded({ index })) {
			content = this.props.renderLoading ? this.props.renderLoading() : 'Loading...';
		} else {
			content = this.props.renderRow(this.props.data[index], index);
		}

		return (
			<CellMeasurer
				cache={this.cache}
				columnIndex={0}
				key={key}
				parent={parent}
				rowIndex={index}
			>
				<div key={key} style={style}>
					{content}
				</div>
			</CellMeasurer>
		)
	}

	render() {
		const { isNextPageLoading, loadNextPage, hasNextPage, data, windowScrolling } = this.props;
		const loadMoreRows = isNextPageLoading ? () => { } : loadNextPage;
		const rowCount = hasNextPage ? data.length + 1 : data.length;

		if (windowScrolling && !this.props.containerHeight) {
			return (
				<WindowScroller>
					{({ height, isScrolling, scrollTop }) => (
						<InfiniteLoader
							isRowLoaded={this.isRowLoaded}
							loadMoreRows={loadMoreRows}
							rowCount={rowCount}
						>
							{({ onRowsRendered, registerChild }) => (
								<AutoSizer ref="resizer" disableHeight={true}>
									{({ width }) => (
										<List
											autoHeight
											ref={registerChild}
											onRowsRendered={onRowsRendered}
											rowRenderer={this.rowRenderer}
											rowCount={rowCount}
											isScrolling={isScrolling}
											scrollTop={scrollTop}
											width={width}
											height={height}
											deferredMeasurementCache={this.cache}
											rowHeight={this.props.rowHeight || this.cache.rowHeight}
										/>
									)}
								</AutoSizer>
							)}
						</InfiniteLoader>
					)}
				</WindowScroller>
			)
		}

		return (
			<InfiniteLoader
				isRowLoaded={this.isRowLoaded}
				loadMoreRows={loadMoreRows}
				rowCount={rowCount}
			>
				{({ onRowsRendered, registerChild }) => (
					<AutoSizer ref="resizer" disableHeight={this.props.containerHeight ? true : false}>
						{({ height, width }) => (
							<List
								ref={registerChild}
								onRowsRendered={onRowsRendered}
								rowRenderer={this.rowRenderer}
								rowCount={rowCount}
								width={width}
								height={this.props.containerHeight || height}
								deferredMeasurementCache={this.cache}
								rowHeight={this.props.rowHeight || this.cache.rowHeight}
							/>
						)}
					</AutoSizer>
				)}
			</InfiniteLoader>
		);
	}
};

InfiniteLoadingList.propTypes = {
	hasNextPage: RequiredBool,
	isNextPageLoading: RequiredBool,
	data: RequiredArray,
	loadNextPage: RequiredFunc,
	renderRow: RequiredFunc,
	renderLoading: OptionalFunc,
	windowScrolling: OptionalBool
}

InfiniteLoadingList.defaultProps = {
	windowScrolling: true
}

module.exports = InfiniteLoadingList;
