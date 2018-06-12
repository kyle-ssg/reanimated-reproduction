import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactNative, { View,  StyleSheet} from 'react-native';
import _ from 'lodash';
import em from '../styles/base/style-em';
import _styles from '../styles/styles';
import styleVariables from '../styles/styleVariables';

var stylesheet;


//A horizontal row
const Row = (props) => (
    <View
        {...props}
        style={[stylesheet.row, props.style, props.space && stylesheet.space, props.noPad && stylesheet.noPad, props.center && stylesheet.rowCenter]}>
        {props.children}
    </View>
);

Row.displayName = "Row";

Row.propTypes = {
    children: PropTypes.node,
    space: PropTypes.bool,
    noPad: PropTypes.bool,
};

// Flex with custom value, defaults to 1
const Flex = (props) => (
    <View {...props} style={[stylesheet.flex, props.style, props.value && {flex: props.value}]}>
        {props.children}
    </View>
);

Flex.displayName = "Flex";

Flex.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number,
};

// FormGroup with custom value, defaults to 1
const FormGroup = (props) => (
    <View
        {...props}
        style={[props.style, {
            paddingTop: styleVariables.paddingVertical,
            paddingBottom: styleVariables.paddingVertical
        }]}>{props.children}</View>
);

FormGroup.displayName = "FormGroup";

FormGroup.propTypes = {
    children: PropTypes.node,
};

// Used within a row, sets margin to gutter base
const Column = (props) => (
    <View {...props} style={[stylesheet.column, props.style, {
        marginLeft: styleVariables.gutter / 2,
        marginRight: styleVariables.gutter / 2
    }]}>
        {props.children}
    </View>
);

Column.displayName = "Column";

Column.propTypes = {
    children: PropTypes.node
};


// Used within a row, sets margin to gutter base
const Container = (props) => (
    <View {...props} style={[stylesheet.container, stylesheet.flex, props.style, props.style]}>
        {props.children}
    </View>
);

Container.displayName = "Container";

Container.propTypes = {
    children: PropTypes.node
};


// Used within a row, sets margin to gutter base
const Text = (props) => (
    <ReactNative.Text {...props} style={[stylesheet.text, props.style]}>
        {props.children}
    </ReactNative.Text>
);

Text.displayName = "Text";

Text.propTypes = {
    children: PropTypes.node
};
// Used within a row, sets margin to gutter base
const TextInput = (props) => (
    <ReactNative.TextInput {...props} style={[stylesheet.textInput, props.style]}>
        {props.children}
    </ReactNative.TextInput>
);

TextInput.displayName = "Text";

TextInput.propTypes = ReactNative.TextInput.propTypes;


// Used within a row, sets margin to gutter base
const Bold = (props) => (
    <Text {...props} style={[stylesheet.bold, props.style]}>
        {props.children}
    </Text>
);

Bold.displayName = "Bold";

Bold.propTypes = {
    children: PropTypes.node
};

// Headers
const H6 = (props) => (
    <Text {...props} style={[stylesheet.h6, props.style]}>
        {props.children}
    </Text>
);

H6.displayName = "H6";

H6.propTypes = {
    children: PropTypes.node
};


const H5 = (props) => (
    <Text {...props} style={[stylesheet.h5, props.style]}>
        {props.children}
    </Text>
);

H5.displayName = "H5";

H5.propTypes = {
    children: PropTypes.node
};

const H4 = (props) => (
    <Text {...props} style={[stylesheet.h4, props.style]}>
        {props.children}
    </Text>
);

H4.displayName = "H4";

H4.propTypes = {
    children: PropTypes.node
};


const H3 = (props) => (
    <Text {...props} style={[stylesheet.h3, props.style]}>
        {props.children}
    </Text>
);

H3.displayName = "H3";

H3.propTypes = {
    children: PropTypes.node
};


const H2 = (props) => (
    <Text {...props} style={[stylesheet.h2, props.style]}>
        {props.children}
    </Text>
);

H2.displayName = "H2";

H2.propTypes = {
    children: PropTypes.node
};


const H1 = (props) => (
    <Text {...props} style={[stylesheet.h1, props.style]}>
        {props.children}
    </Text>
);

H1.displayName = "H1";

H1.propTypes = {
    children: PropTypes.node
};


const ListItem = class extends Component {
    displayName: 'ListItem'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        var content = (
            <Row>
                {this.props.icon}
                <View style={[this.props.disabled && stylesheet.listItemDisabled, stylesheet.liContent, { backgroundColor: 'transparent' }]}>
                    {this.props.children}
                </View>
            </Row>
        );
        return (
            this.props.onPress ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.props.disabled ? null : this.props.onPress}>
                    <View style={this.props.style || stylesheet.listItem}>
                        {content}
                    </View>
                </TouchableOpacity>
                : <View style={[this.props.style || stylesheet.listItem]}>{content}</View>
        );
    }
};

ListItem.propTypes = {};
ListItem.defaultProps =  {
    onPress: null,
    text: null,
    underlayColor: styleVariables.inputBackground,
};;

//Merges style variables and stylesheets
const init = (styles = {}, variables = {}) => {
    Object.assign(styleVariables, variables);
    stylesheet = StyleSheet.create(_.merge(_styles(), styles));
    if (globalised)
        globalise();
};

const Button = class extends Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        var touchableProps = {
            activeOpacity: this._computeActiveOpacity(),
        };

        if (!this.props.disabled) {
            touchableProps.onPress = this.props.onPress || this.props.onClick;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }

        //compute styles e.g. buttonGroupLeft, big, bigRight, buttonGroupText, bigText, but
        var groupStyle = [Styles.buttonGroup,
            this.props.position && styles['buttonGroup' + Format.camelCase(this.props.position)],
            this.props.variation && styles['buttonGroup' + Format.camelCase(this.props.variation)],
            this.props.variation && this.props.position && styles[this.props.variation + Format.camelCase(this.props.position)],
            this.props.style
        ];

        var textStyle = [Styles.buttonText,
            this.props.position && styles['buttonText' + Format.camelCase(this.props.position) + "Text"],
            this.props.variation && styles['buttonText' + Format.camelCase(this.props.variation)],
            this.props.variation && this.props.position && styles[this.props.variation + Format.camelCase(this.props.position) + "Text"],
            this.props.textStyle
        ];

        return Platform.OS == "android" ? (
            <View style={{opacity: this.props.disabled ? 0.5 : 1}}>
                <TouchableNativeFeedback
                    {...touchableProps}
                    background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.5)')}
                >
                    <View style={groupStyle}>
                        {typeof this.props.children == "string" ? (
                            <Text style={textStyle}>{this.props.children}</Text>
                        ) : this.props.children}
                    </View>
                </TouchableNativeFeedback>
            </View>
        ) : (
            <View style={{opacity: this.props.disabled ? 0.5 : 1}}>
                <TouchableOpacity {...touchableProps}
                                  style={groupStyle}>
                    {typeof this.props.children == "string" ? (
                        <Text pointerEvents="none" style={textStyle}>{this.props.children}</Text>
                    ) : this.props.children}
                </TouchableOpacity>
            </View>
        );
    }

    _computeActiveOpacity() {
        if (this.props.disabled) {
            return 1;
        }
        return styleVariables.buttonActiveOpacity;
    }
}

Button.propTypes = {
    onPress: OptionalFunc, //What to do on press
    onPressIn: OptionalFunc, //What to do on press in
    onPressOut: OptionalFunc, //What to do on press out
    onLongPress: OptionalFunc, //What to do on long press
    style: React.PropTypes.any,
    textStyle: OptionalObject, // style for the button text
    disabled: OptionalBool, // whether the button is disabled
    variation: OptionalString // a way to use predefined style variations (e.g. large, warning)
}

let globalised = false;
const globalise = () => {
    globalised = true;
    global.em = em;
    global.Row = Row;
    global.Flex = Flex;
    global.FormGroup = FormGroup;
    global.Container = Container;
    global.Button = Button;
    global.Column = Column;
    global.Text = Text;
    global.Bold = Bold;
    global.H1 = H1;
    global.H2 = H2;
    global.TextInput = TextInput;
    global.H3 = H3;
    global.H4 = H4;
    global.ListItem = ListItem;
    global.H5 = H5;
    global.H6 = H6;
    global.Styles = stylesheet;
    global.StyleVariables = styleVariables
};

init();

module.exports = {init, em, Row, Flex, FormGroup, Container, Column, Text, Bold, H1, H2, H3, H4, H5, H6, globalise};