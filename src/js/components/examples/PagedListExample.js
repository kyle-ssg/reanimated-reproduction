const Pager = (props) => (
    <nav className="text-center page-controls">
        <ul className="pagination">

            <li className={!props.canPrev && "disabled"}>
                <a onClick={props.canPrev && _.partial(props.onChange, props.currentPage - 1)}>
                    Prev
                </a>
            </li>

            {props.showFirstPage && (
                <li className={props.currentPage == 1 && "active"}>
                    <a onClick={()=>props.onChange(1)}>
                        1
                    </a>
                </li>
            )}

            {props.prevTruncated && <li className="disabled"><a>&hellip;</a></li>}
            {props.startPage > 2 && <li className="disabled"><a>&hellip;</a></li>}

            {_.map(props.range, (val)=>(
                <li key={val} className={props.currentPage == val && "active"}>
                    <a onClick={_.partial(props.onChange, val)}>{val}</a>
                </li>
            ))}

            {props.nextTruncated && <li className="disabled"><a>&hellip;</a></li>}

            {props.showLastPage && (
                <li className={props.currentPage == props.totalPages && "active"}>
                    <a onClick={_.partial(props.onChange, props.totalPages)}>{props.totalPages}</a>
                </li>
            )}

            <li className={!props.canNext && "disabled"}>
                <a onClick={props.canNext && _.partial(props.onChange, props.currentPage + 1)}>Next</a>
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
            pages: _.map(_.range(0, 10), (page)=> _.range(page * 10, page*10 + 10)),
            currentPage: 1
        };
    }

    loadPage = (currentPage) => {
        this.setState({ currentPage })
    }

    render () {
        const paging = Utils.getPaging(this.state.currentPage, this.state.pages.length, 3);
        const elements = this.state.pages[this.state.currentPage - 1];
        return (
            <div>
                <Pager onChange={this.loadPage} {... paging}/>
                {_.map(elements, (val)=><div>Row {val} <Divider/></div>)}
                <Pager onChange={this.loadPage} {... paging}/>
            </div>
        );
    }
};