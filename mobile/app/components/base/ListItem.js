import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactNative, { Platform, TouchableNativeFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

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
      animationProps: propTypes.object,
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
          <View>
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
      const animationProps = this.props.animationProps
          ? Object.assign(this.props.animationProps, {
              delay: this.props.delay + 10 + Number(this.props.index || 0) * 50,
          })
          : {};
      const TheView = this.props.animationProps
          ? Animatable.View
          : ReactNative.View;
      return this.props.onPress ? (
          <TheView style={this.props.style || Styles.listItem} {...animationProps}>
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
          </TheView>
      ) : (
          <Animatable.View
            {...this.props.animationProps}
            style={[this.props.style || Styles.listItem]}
          >
              {content}
          </Animatable.View>
      );
  }
};
ListItem.defaultProps = {
    onPress: null,
    delay: 0,
    animationProps: null,
};

module.exports = ListItem;
