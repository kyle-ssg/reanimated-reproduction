import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    isSelected = (i) => {
        const { multiple } = this.props;
        const value = this.props.value || [];
        return multiple ? value.indexOf(i) !== -1 : value == i;
    };

    setItem = (i, selected) => {
        const { multiple, value, onChange } = this.props;
        if (multiple) {
            if (selected) {
                onChange((value || []).concat(i));
            } else {
                const index = value.indexOf(i);
                value.splice(index, 1);
                onChange(value);
            }
        } else {
            if (selected) {
                onChange(i);
            } else {
                onChange(null);
            }
        }

    };

    render() {
        const { renderRow, renderNoResults, filterItem, placeholder, style } = this.props;
        const { search } = this.state;
        let data = filterItem ? _.filter(this.props.data, (i) => (
                !search || filterItem(i, search)
            )) : this.props.data;
        return (
            <Flex style={{style}}>
                {
                    filterItem &&
                    <TextInput placeholder={placeholder}
                               onChangeText={(search) => this.setState({ search: search.toLowerCase() })}/>
                }
                {
                    data && data.length ? data.map((i) => {
                        const isSelected = this.isSelected(i);
                        const toggleItem = () => {
                            this.setItem(i, !isSelected)
                        };

                        return renderRow(i, isSelected, toggleItem);
                    }) : renderNoResults? renderNoResults() : <Text>No Results Found for: <Bold>{search}</Bold></Text>
                }
            </Flex>
        );
    }
};

TheComponent.propTypes = {
    value: React.PropTypes.any,
    data: React.PropTypes.array,
    multiple: React.PropTypes.bool,
    filterItem: React.PropTypes.func,
    renderRow: React.PropTypes.func,
    placeholder: React.PropTypes.string,
};

module.exports = TheComponent;
