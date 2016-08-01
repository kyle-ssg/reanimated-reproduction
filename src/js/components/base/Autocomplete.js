import FocusMonitor from './higher-order/FocusMonitor';
import InputStepper from './higher-order/InputStepper';

const AutoComplete = class extends React.Component {
    displayName:'AutoComplete'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    onFocusChanged = (isFocused) => {
        this.setState({ isFocused });
    }

    forceUpdateGrid = () => {
        this.refs.input.refs.list.forceUpdateGrid();
    }

    render () {
        return (
            <FocusMonitor onFocusChanged={this.onFocusChanged}>
                <InputStepper
                    ref="input"
                    data={this.state.data}
                    onChange={this.selectRow}
                    inputProps={this.props.inputProps}>
                    {
                        (highlightedRow, highlightRow) => (
                            <div className={"popover " + (this.state.isFocused ? "in" : "")}>
                                <ListView
                                    className={this.props.isAbsolute && 'absolute'}
                                    ref="list"
                                    scrollToRow={highlightedRow}
                                    renderNoResults={this.props.renderNoResults}
                                    renderRow={(row, index)=>
                                        this.props.renderRow(row, index, highlightedRow, highlightRow)
                                    }
                                    data={this.props.data}
                                    containerHeight={this.props.containerHeight}
                                    rowHeight={this.props.rowHeight}
                                />
                            </div>
                        )
                    }
                </InputStepper>
            </FocusMonitor>
        );
    }
};

AutoComplete.defaultProps = {
    isAbsolute: true,
    containerHeight: 200,
    rowHeight: 40
};

AutoComplete.propTypes = {
    onSelect: RequiredFunc,
    onChange: RequiredFunc,
    renderRow: RequiredFunc,
    data: RequiredArray,
    isAbsolute: OptionalBool,
    inputProps: OptionalObject,
    containerHeight: OptionalNumber,
    rowHeight: OptionalNumber,
    renderNoResults: OptionalFunc
};

module.exports = AutoComplete;