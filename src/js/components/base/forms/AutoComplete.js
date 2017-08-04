import FocusMonitor from '../higher-order/FocusMonitor';
import InputStepper from '../higher-order/InputStepper';

const AutoComplete = class extends React.Component {
    displayName: 'MultiSelect'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    onFocusChanged = (isFocused) => {
        this.setState({ isFocused });
    }

    forceUpdateGrid = () => {
        this.refs.input.refs.list.forceUpdateGrid();
    }

    removeItem = (x) => {
        if (!this.props.multiple)
            return this.props.onSelectChange(x);

        const newValue = (this.props.value || []).slice(0);
        newValue.splice(x, 1);
        this.props.onSelectChange(newValue);
    }

    onKeyUp = (e) => {
        if (Utils.keys.isBackspace(e) && this.props.value.length) {
            if (!this.refs.input.refs.input.refs.input.value) //this isn't ideal
                this.removeItem(this.props.value.length - 1);
        }
    }

    addItem = (item) => {
        if (!this.props.multiple) {
            this.props.onSelectChange(item);
            this.refs.input.refs.input.refs.input.blur(); //this isn't ideal
            this.setState({ isFocused: false });

            return
        }

        const newValue = (this.props.value || []).slice(0);
        const indexOf = (this.props.value || []).indexOf(item);
        if (indexOf == -1) {
            newValue.push(item);
            this.props.onSelectChange(newValue);
            setTimeout(() => {
                this.refs.input.refs.input.refs.input.value = "";
                this.refs.input.refs.input.refs.input.focus(); //this isn't ideal
            }, 10);
        } else {
            this.removeItem(indexOf);
            setTimeout(() => {
                this.refs.input.refs.input.refs.input.value = "";
                this.refs.input.refs.input.refs.input.focus(); //this isn't ideal
            }, 10);
        }
    }

    handleFocus = (v) => {
        if (!v)
            this.refs.input.refs.input && this.refs.input.refs.input.refs.input != document.activeElement && this.refs.focus.toggle();
    }

    render() {
        var classNames = cn({
            popover: this.props.isAbsolute,
            in: this.props.isAbsolute && this.state.isFocused,
            'autocomplete-container': true
        });

        return (
            <FocusMonitor ref="focus" onFocusChanged={this.onFocusChanged}>
                <InputStepper
                    ref="input"
                    onFocusChanged={(v) => setTimeout(() => this.handleFocus(v), 100)}
                    onChange={this.addItem}
                    data={this.props.data}
                    onSearchChange={this.addItem}
                    inputProps={{
                        placeholder: this.props.placeholder,
                        ...this.props.inputProps,
                        onChange: this.props.onSearchChange,
                        onKeyUp: this.onKeyUp
                    }}>
                    {
                        (theInput, highlightedRow, highlightRow) => (
                            <div>
                                <Row>
                                    {this.props.multiple ? this.props.value && this.props.value.map((value, i) => (
                                        <div key={i} className="multi-select-item">
                                            {this.props.renderSelectedItem(value, () => this.removeItem(i))}
                                        </div>
                                    )) : (
                                        this.props.value && (
                                            <div className="multi-select-item">
                                                {this.props.renderSelectedItem(this.props.value, () => this.removeItem())}
                                            </div>
                                        )
                                    )}

                                    {(this.props.multiple || !this.props.value) && (
                                        <div ref="input-container">
                                            {theInput}
                                        </div>
                                    )}

                                </Row>
                                <div className="autocomplete-container">
                                    <div className={classNames}>
                                        <div>
                                            <ListView
                                                ref="list"
                                                scrollToRow={highlightedRow}
                                                renderNoResults={this.props.renderNoResults}
                                                renderRow={(row, index) =>
                                                    <div key={row.id || row} onMouseDown={() => this.addItem(row)}>
                                                        {this.props.renderRow(row, index, highlightedRow, highlightRow,)}
                                                    </div>
                                                }
                                                data={this.props.data}
                                                containerHeight={this.props.containerHeight}
                                                rowHeight={this.props.rowHeight}
                                            />
                                        </div>
                                    </div>
                                </div>
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
    rowHeight: 40,
};

AutoComplete.propTypes = {
    onSearchChange: RequiredFunc,
    onSelectChange: RequiredFunc,
    renderSelectedItem: RequiredFunc,
    renderRow: RequiredFunc,
    placeholder: OptionalString,
    data: RequiredArray,
    isAbsolute: OptionalBool,
    inputProps: OptionalObject,
    containerHeight: OptionalNumber,
    rowHeight: OptionalNumber,
    renderNoResults: OptionalFunc
};

module.exports = AutoComplete;
