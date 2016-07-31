/**
 * Created by kylejohnson on 31/07/2016.
 */
import InputStepper from '../base/higher-order/InputStepper';
import Highlighter from '../../components/base/Highlighter';
import data from './country-data';

const NavigableList = class extends React.Component {
    displayName:'NavigableList'

    constructor (props, context) {
        super(props, context);
        this.state = { data: data };
    }

    selectRow = (data) => {
        openConfirm(<h3>Your Selection</h3>,
            <div>Are you sure you want to select {data.name}?</div>)
    }

    search = (e) => { //simple search
        const search = Utils.safeParseEventValue(e).toLowerCase();
        this.setState({
            search,
            data: data.filter((item)=> {
                return item.name.toLowerCase().indexOf(search) > -1
            })
        }, this.refs.input.refs.list.forceUpdateGrid);
    }

    renderRow = (row, index, selectedRow, highlightRow) => {
        const isSelected = selectedRow === index;
        return (
            <div onMouseOver={()=>highlightRow(index)}>
                <Row space>
                    <Button onClick={()=>this.selectRow(row)}
                            className={"btn-link " + (!isSelected ? "btn-link-secondary" : "")}>
                        {isSelected ? row.name : <Highlighter search={this.state.search} value={row.name}/>}
                    </Button>
                    {row.code}
                </Row>
            </div>
        );
    }

    render () {
        return (
            <div>
                <h2>
                    Navigable List
                    <Tooltip place="right">
                        Uses the input tep through infinite scroll with keyboard from input
                    </Tooltip>
                </h2>
                <InputStepper
                    ref="input"

                    data={this.state.data}
                    onChange={this.selectRow}
                    inputProps={{ className: "full-width", onChange: this.search, placeholder: 'Search' }}>
                    {
                        (highlightedRow, highlightRow) => (
                            <div>
                                <ListView
                                    ref="list"
                                    scrollToRow={highlightedRow}
                                    renderRow={(row, index)=>
                                        this.renderRow(row, index, highlightedRow, highlightRow)
                                    }
                                    data={this.state.data}
                                    containerHeight={200}
                                    rowHeight={40}
                                />
                            </div>
                        )
                    }
                </InputStepper>
            </div>
        );
    }
};

NavigableList.propTypes = {};

module.exports = NavigableList;