/**
 * Created by kylejohnson on 29/07/2016.
 */
import Infinite from 'react-infinite';

const InfiniteScroll = class extends React.Component {
    displayName:'InfiniteScroll'

    render () { //TODO: implement a reversed scroll view
        return (
            <Infinite
                displayBottomUpwards={this.props.reverse}
                containerHeight={this.props.containerHeight}
                elementHeight={this.props.elementHeight}
                useWindowAsScrollContainer={!this.props.containerHeight}
                preloadAdditionalHeight={window.innerHeight * 2}
                infiniteLoadBeginEdgeOffset={this.props.threshold}
                onInfiniteLoad={this.props.loadMore}
                loadingSpinnerDelegate={this.props.renderLoading}
                isInfiniteLoading={this.props.isLoading}
            >
                {this.props.data.map(this.props.renderRow)}
            </Infinite>
        );
    }
};

InfiniteScroll.defaultProps = {
    useWindowAsScrollContainer: true,
    className: 'infinite-scroll',
    threshold: 1000
};

InfiniteScroll.propTypes = {
    data: RequiredArray,
    containerHeight: OptionalNumber,
    elementHeight: OptionalNumber,
    threshold: OptionalNumber,
    reverse: OptionalBool,
    isLoading: OptionalBool,
    loadMore: RequiredFunc,
    renderRow: RequiredFunc,
    renderLoading: OptionalObject,
};

module.exports = InfiniteScroll;