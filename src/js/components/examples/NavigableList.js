/**
 * Created by kylejohnson on 31/07/2016.
 */
import InputStepper from '../base/InputStepper';

const data = ['Blade', 'Laser', 'Blazer', 'Meshell'];

const NavigableList = class extends React.Component {
    displayName:'NavigableList'

    constructor (props, context) {
        super(props, context);
        this.state = { data: data };
    }

    selectRow = (data) => {
        openConfirm(<h3>Your Selection</h3>,
            <div>Are you sure you want to select {data}?</div>)
    }

    search = (e) => { //simple search
        const search = Utils.safeParseEventValue(e).toLowerCase();
        this.setState({
            data: data.filter((item)=> {
                return item.toLowerCase().indexOf(search) > -1
            })
        });
    }

    renderRow = (row, index, selectedRow, highlightRow) => {
        const isSelected = selectedRow === index;
        return (
            <div onMouseOver={()=>highlightRow(index)}>
                <Button onClick={()=>this.selectRow(row)} className={"btn-link " + (!isSelected ? "btn-link-secondary" : "")}>
                    {row}
                </Button>
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
                    inputProps={{ onChange: this.search, placeholder: 'Search' }}>
                    {
                        (highlightedRow, highlightRow) => (
                            <div>
                                <ListView
                                    scrollToRow={highlightedRow}
                                    renderRow={(row, index)=>
                                        this.renderRow(row, index, highlightedRow, highlightRow)
                                    }
                                    data={this.state.data}
                                    containerHeight={120}
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