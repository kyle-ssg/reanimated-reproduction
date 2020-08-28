// HTML like select input
import React from 'react';
import propTypes from "prop-types";
import { PureComponent } from "react";

const SelectBox = class extends PureComponent {
  static displayName = "SelectBox";

  static propTypes = {
    disabled: propTypes.bool,
    hideIcon: propTypes.bool,
    onPress: propTypes.func,
    textStyle: propTypes.object,
    containerStyle: propTypes.any,
    iconStyle: propTypes.object,
    children: propTypes.any,
    options: propTypes.array,
    title: propTypes.string,
    onChange: propTypes.func,
    onBlur: propTypes.func,
  };

  onPress = () => {
    const { options, title, onChange, onBlur } = this.props;
    API.showOptions(title, options, true, false, null, true).then((i) => {
      if (onBlur) onBlur();
      if (onChange && i != null)
        onChange(i < options.length ? options[i] : null);
    });
  };

  render() {
    const {
      disabled,
      onPress,
      textStyle,
      containerStyle,
      iconStyle,
      hideIcon,
      children,
      style,
      title,
    } = this.props;
    return (
        <View style={[{ opacity: disabled ? 0.5 : 1 }, style]}>
            {!!title && (
            <FormGroup>
                <Text style={Styles.inputLabel}>{this.props.title}</Text>
            </FormGroup>
        )}
            <TouchableOpacity
              activeOpacity={disabled ? 1 : 0.8}
              onPress={!disabled && (onPress || this.onPress)}
              style={[Styles.selectBoxContainer, containerStyle || {}]}
            >
                <Row style={{ flexWrap: "nowrap" }} space>
                    <Flex>
                        <Text
                          numberOfLines={1}
                          style={[Styles.inputText, textStyle || {}]}
                        >
                            {children}{" "}
                        </Text>
                    </Flex>
                    {!hideIcon && (
                    <Column>
                        <ION
                          style={[Styles.selectBoxIcon, iconStyle || {}]}
                          name="ios-chevron-down"
                        />
                    </Column>
            )}
                </Row>
            </TouchableOpacity>
        </View>
    );
  }
};

global.SelectBox = SelectBox;

export default SelectBox;
