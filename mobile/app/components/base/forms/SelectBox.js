// HTML like select input
import React from 'react';
import propTypes from "prop-types";
import { PureComponent } from "react";
import Icon from 'react-native-vector-icons/Ionicons';

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
    style: propTypes.func,
    titleStyle: propTypes.func,
    destructiveButton: propTypes.bool,
  };

  onPress = () => {
    const { options, title, onChange, onBlur, destructiveButton } = this.props;
    if (!options || !options.length) return;
    API.showOptions(title, options, true, false, destructiveButton, true).then((i) => {
      if (onBlur) onBlur();
      if (onChange && i != null)
        onChange(i < options.length ? options[i] : null, i < options.length ? i : null);
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
      title,
      style,
      titleStyle
    } = this.props;
    return (
        <View style={[this.props.style, { opacity: disabled ? 0.5 : 1 }]}>
            {!!title && (
            <FormGroup>
                <Text
                  style={[Styles.inputLabel, titleStyle || {}]}
                >{this.props.title}</Text>
            </FormGroup>
        )}
            <TouchableOpacity
              activeOpacity={disabled ? 1 : 0.8}
              onPress={!disabled && (onPress || this.onPress)}
              style={[Styles.selectBoxContainer, containerStyle || {}]}
            >
                <Row>

                    {this.props.icon ? (
                        <View style={{ marginRight: 10 }}>
                            {this.props.icon}
                        </View>
                  ) : (
                    null
                  )}

                    <View style={Styles.pr15}>
                        <Text
                          numberOfLines={1}
                          style={[Styles.textInputText, textStyle || {}]}
                        >
                            {children}{" "}
                        </Text>
                    </View>
                    {!hideIcon && (
                    <View style={[{ position: 'absolute', right: 0 }, Styles.pr5]}>
                        <Icon name="chevron-down" size={13} color={palette.navy}
                          light
                        />
                    </View>
            )}
                </Row>
            </TouchableOpacity>
        </View>
    );
  }
};

global.SelectBox = SelectBox;

export default SelectBox;
