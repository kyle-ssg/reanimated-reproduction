/**
 * Created by kylejohnson on 25/07/2016.
 * Example usage:
 *  <Select
 *      multiple
 *      options={[{value:'1', label:'1'}]}
 *      placeholder='Select something'
 *      onChange={this.handleSelectChange}/>
 */

import Highlighter from '../base/addons/react-select-highlighter';

const WrappedSelect = class extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.highlighter = new Highlighter({
            valueLabel: 'description',
            renderOption: props.renderOption || (
                (item, text) => (
                    <div>
                        {item && text}
                    </div>
                )
            ),
            renderText: props.renderOption || (
                (text) => (
                    <span>{text}</span>
                )
            ),
            renderHighlight: (text) => (
                <strong>{text}</strong>
            )
        });
    }

    render() {
        const props = this.props;
        return (
            <Select
                placeholder={this.props.placeholder}
                options={this.props.options}
                simpleValue
                multi={props.multi}
                labelKey={props.label || 'description'}
                valueKey={props.value || 'description'}
                onChange={props.onChange}
                onBlur={this.highlighter.onBlur.bind(highlighter)}
                onInputChange={this.highlighter.onInputChange.bind(this.highlighter)}
                optionRenderer={this.highlighter.optionRenderer.bind(this.highlighter)}
                value={this.props.value}
            />
        );
    }
};

WrappedSelect.propTypes = {
    renderOption: OptionalFunc,
    placeholder: OptionalString,
    value: OptionalObject,
    options: OptionalArray
};