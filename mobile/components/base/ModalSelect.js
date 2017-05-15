import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = { modalSelectValue: this.props.value };
    }

    render() {
        const { title, data, placeholder, filterItem, onChange, multiple, renderRow } = this.props;
        return (
            <Flex>
                <ModalHeader closeSelect={true} title={title}/>
                <Select data={data}
                        multiple={multiple}
                        placeholder={placeholder}
                        filterItem={filterItem}
                        value={this.state.modalSelectValue}
                        onChange={(modalSelectValue) => this.setState({ modalSelectValue })}
                        renderRow={renderRow}/>
                <Button onPress={() => {
                    closeSelect();
                    onChange(this.state.modalSelectValue);
                }}>
                    Done
                </Button>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
