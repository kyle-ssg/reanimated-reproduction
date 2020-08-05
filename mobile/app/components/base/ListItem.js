import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactNative, { Platform, TouchableNativeFeedback } from 'react-native';

const ListItem = class extends Component {
  static displayName = 'ListItem';

  static propTypes = {
    accessible: propTypes.bool,
    accessibilityLabel: propTypes.string,
    icon: propTypes.node,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node,
    ]).isRequired,
    delay: propTypes.number,
    index: propTypes.number,
    onPress: propTypes.func,
    style: propTypes.any,
    disabled: propTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = (
        <View style={[Styles.ph5, this.props.style]}>
            <Row>
                {this.props.icon}
                <View
                  style={[
                    this.props.disabled && Styles.listItemDisabled,
                    Styles.liContent,
                    { backgroundColor: 'transparent' },
                  ]}
                >
                    {this.props.children}
                </View>
            </Row>
        </View>
    );

    return this.props.onPress ? (
        <View style={this.props.style || Styles.listItem}>
            {Platform.OS === 'android' ? (
                <TouchableNativeFeedback
                  accessible={this.props.accessible}
                  accessibilityLabel={this.props.accessibilityLabel}
                  onPress={this.props.disabled ? null : this.props.onPress}
                  background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                >
                    {content}
                </TouchableNativeFeedback>
            ) : (
                <TouchableOpacity
                  accessible={this.props.accessible}
                  accessibilityLabel={this.props.accessibilityLabel}
                  activeOpacity={0.8}
                  onPress={this.props.disabled ? null : this.props.onPress}
                >
                    {content}
                </TouchableOpacity>
            )}
        </View>
    ) : (
        <View
          style={[this.props.style || Styles.listItem]}
        >
            {content}
        </View>
    );
  }
};
ListItem.defaultProps = {
  onPress: null,
  delay: 0,
};

module.exports = ListItem;
