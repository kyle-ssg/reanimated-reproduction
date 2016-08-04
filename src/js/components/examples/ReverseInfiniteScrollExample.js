const ReverseInfiniteScrollExample = class extends React.Component {

  displayName:'ReverseInfiniteScrollExample'

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
    }, 2000);
  }

  renderRow (data) {
    return (
      <div className=".FlexTable__row" key={data}>
        Row {data + 1}
      </div>
    );
  }

  addToBottom = () => {
    let data = this.state.data.slice(0);
    data.unshift(data.length);
    this.setState({ data });
  }

  render () {
    return (
      <div>
        <h2>
          Async Infinite scroll (reversed)
          <Tooltip place="right">
            Performant reverse infinite scroll
          </Tooltip>
        </h2>
        <InfiniteScroll
          renderLoading={(
            <div style={{ height: 40 }}>
              Loading...
            </div>
          )}
          rowHeight={40}
          containerHeight={200}
          threshold={50}
          data={this.state.data}
          isLoading={this.state.isLoading}
          loadMore={this.loadMore}
          renderRow={this.renderRow}
          reverse={true}
        />
        <Button onClick={this.addToBottom}>Add Row to Bottom</Button>
      </div>
    );
  }
};

ReverseInfiniteScrollExample.propTypes = {};

module.exports = ReverseInfiniteScrollExample;
