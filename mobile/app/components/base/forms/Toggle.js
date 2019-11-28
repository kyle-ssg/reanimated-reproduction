import React from 'react';
import propTypes from 'prop-types';

class Toggle extends React.PureComponent {
    static displayName = 'Toggle'

    static propTypes = {
        onChange: propTypes.func,
        toggled: propTypes.bool,
        children: propTypes.oneOfType([
            propTypes.arrayOf(propTypes.node),
            propTypes.node,
        ]),
    }

    constructor(props) {
        super(props);
        this.state = {
            toggled: !!props.toggled,
        };
    }

    handleClick = () => {
        this.setState({ toggled: !this.state.toggled });
        this.props.onChange && this.props.onChange(!this.state.toggled);
    }

    render() {
        const baseStyle = {
            width: 50,
            height: 50,
        };
        const toggledStyle = {
            backgroundColor: pallette.bookmakerPrimary,
        };
        const unToggledStyle = {
            backgroundColor: pallette.racingPostLightGray,
        };
        const toggledTextStyle = {
            color: '#ffffff',
        };
        const unToggledTextStyle = {
            color: pallette.text,
        };
        const currentStyle = this.state.toggled ? toggledStyle : unToggledStyle;
        const currentTextStyle = this.state.toggled ? toggledTextStyle : unToggledTextStyle;
        return (
            <Button
              style={[baseStyle, currentStyle]}
              textStyle={currentTextStyle}
              onClick={this.handleClick}
              type="button"
            >
                {this.props.children}
            </Button>
        );
    }
}

module.exports = Toggle;