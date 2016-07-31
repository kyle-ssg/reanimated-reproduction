const Pager = (props) => (
    <nav className="text-center page-controls">
        <ul className="pagination">

            <li className={"page-item" + (!props.canPrev && " disabled" || "")}>
                <a className="page-link" onClick={props.canPrev && _.partial(props.onChange, props.currentPage - 1)}>
                    Prev
                </a>
            </li>

            {props.showFirstPage && (
                <li className={"page-item" + (props.currentPage == 1 && " active" || "")}>
                    <a className="page-link" onClick={()=>props.onChange(1)}>
                        1
                    </a>
                </li>
            )}

            {props.prevTruncated && <li className="page-item disabled"><a className="page-link">&hellip;</a></li>}
            {props.startPage > 2 && <li className="page-item disabled"><a className="page-link">&hellip;</a></li>}

            {_.map(props.range, (val)=>(
                <li key={val} className={"page-item " + (props.currentPage == val && " active" || "")}>
                    <a className="page-link" onClick={_.partial(props.onChange, val)}>{val}</a>
                </li>
            ))}

            {props.nextTruncated && (
                <li className="page-item disabled">
                    <a className="page-link">&hellip;</a>
                </li>
            )}

            {props.showLastPage && (
                <li className={"page-item" + (props.currentPage == props.totalPages && " active" || "")}>
                    <a className="page-link"
                       onClick={_.partial(props.onChange, props.totalPages)}>{props.totalPages}</a>
                </li>
            )}

            <li className={"page-item" + (!props.canNext && " disabled" || "")}>
                <a className="page-link" onClick={props.canNext && _.partial(props.onChange, props.currentPage + 1)}>Next</a>
            </li>

        </ul>
    </nav>
);

Pager.propTypes = {
    onChange: OptionalFunc,
    nextTruncated: OptionalBool,
    prevTruncated: OptionalBool,
    showFirstPage: OptionalBool,
    showLastPage: OptionalBool,
    canNext: OptionalBool,
    canPrev: OptionalBool,
    totalPages: OptionalNumber,
    startPage: OptionalNumber,
    range: OptionalArray,
    currentPage: OptionalNumber,
};

module.exports = class extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            pages: _.map(_.range(0, 100000), (page)=> _.range(page * 1000, page * 1000 + 1000)),
            currentPage: 1
        };
    }

    loadPage = (currentPage) => {
        this.setState({ currentPage }, ()=>{this.refs.list.forceUpdateGrid()});
    }

    renderRow (val) {
        console.log(arguments)
        return (
            <div key={val}>Row {val + 1} <Divider/></div>
        )
    }

    render () {
        const paging = Utils.getPaging(this.state.currentPage, this.state.pages.length, 3);
        const elements = this.state.pages[this.state.currentPage - 1];
        return (
            <div>
                <Pager onChange={this.loadPage} {... paging}/>
                <ListView
                    ref="list"
                    containerHeight={200}
                    rowHeight={40}
                    data={elements}
                    renderRow={this.renderRow}
                />
                <Pager onChange={this.loadPage} {... paging}/>
            </div>
        );
    }
};