const InputStepper = class extends React.Component {
    displayName:'InputStepper'

    constructor (props, context) {
        super(props, context);
        this.state = { selectedRow: -1 };
    }

    onFocusChanged = (isFocused) => {
        this.setState({ isFocused, selectedRow: isFocused ? 0 : -1 });
    }

    onKeyDown = (e) => {
        if (!this.props.data) {
            return;
        }

        if (Utils.keys.isDown(e)) {
            this.highlightRow(Math.min(this.state.selectedRow + 1, this.props.data.length -1));
        } else if (Utils.keys.isUp(e)) {
            this.highlightRow(Math.max(this.state.selectedRow - 1, 0));
        }  else if (Utils.keys.isEnter(e)) {
            this.props.onChange(this.props.data[this.state.selectedRow], e);
        }
    }

    highlightRow = (row) => {
        this.setState({ selectedRow: row });
    }

    render () {
        return (
            <div className={'list-container'}>
                <Input {... this.props.inputProps}
                       onBlur={()=>this.onFocusChanged(false)}
                       onFocus={()=>this.onFocusChanged(false)}
                       onKeyDown={this.onKeyDown}/>
                {this.props.children(this.state.selectedRow, this.highlightRow)}
            </div>
        );
    }
};

InputStepper.propTypes = {
    children: RequiredFunc,
    data: OptionalArray,
    inputProps: OptionalObject
};

module.exports = InputStepper;