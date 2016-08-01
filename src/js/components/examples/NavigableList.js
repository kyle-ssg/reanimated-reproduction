/**
 * Created by kylejohnson on 31/07/2016.
 */
import FocusMonitor from '../base/higher-order/FocusMonitor';
import InputStepper from '../base/higher-order/InputStepper';
import Highlighter from '../../components/base/Highlighter';
import data from './country-data';

const NavigableList = class extends React.Component {
    displayName:'NavigableList'

    constructor (props, context) {
        super(props, context);
        this.state = { data: data };
    }

    onFocusChanged = (isFocused) => {
        this.setState({ isFocused });
    }

    selectRow = (data) => {
        openConfirm(<h3>Your Selection</h3>,
            <div>Are you sure you want to select {data.name}?</div>);
    }

    search = (e) => { //simple search
        const search = Utils.safeParseEventValue(e).toLowerCase();
        this.setState({
            search,
            data: data.filter((item)=> (
                item.name.toLowerCase().indexOf(search) > -1
            ))
        }, this.refs.input.refs.list.forceUpdateGrid);
    }

    renderRow = (row, index, selectedRow, highlightRow) => {
        const isSelected = selectedRow === index;
        return (
            <div onMouseOver={()=>highlightRow(index)}>
                <Row space>
                    <Button onMouseDown={()=>this.selectRow(row)}
                            className={"btn-link " + (!isSelected ? "btn-link-secondary" : "")}>
                        {isSelected ? row.name : <Highlighter search={this.state.search} value={row.name}/>}
                    </Button>
                    {row.code}
                </Row>
            </div>
        );
    }

    onAbsoluteChanged = (isAbsolute) => this.setState({isAbsolute})

    render () {
        const inputProps = {
            className: "full-width",
            onChange: this.search,
            placeholder: 'Search'
        };
        return (
            <div className={"autocomplete " + (this.state.isFocused ? "in" : "")}>
                <h2>
                    Navigable List
                    <Tooltip place="right">
                        Uses the input step through + ListView + FocusMonitor
                    </Tooltip>
                </h2>
                Show as popover ?
                <Switch value={this.state.absolute} onChange={this.onAbsoluteChanged}/>
                <FocusMonitor onFocusChanged={this.onFocusChanged}>
                    <InputStepper
                        ref="input"
                        data={this.state.data}
                        onChange={this.selectRow}
                        inputProps={inputProps}>
                        {
                            (highlightedRow, highlightRow) => (
                                <div>
                                    <ListView
                                        className={this.state.isAbsolute && 'absolute'}
                                        ref="list"
                                        scrollToRow={highlightedRow}
                                        renderNoResults={<div>No results</div>}
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
                </FocusMonitor>
            </div>
        );
    }
};

NavigableList.propTypes = {};

module.exports = NavigableList;