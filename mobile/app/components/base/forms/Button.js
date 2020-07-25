import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';

const buttonPropTypes = {
    accessibilityLabel: propTypes.string, // Accessibility label
    accessible: propTypes.bool, // Whether the button is accessible
    onPress: propTypes.func, // What to do on press
    onClick: propTypes.func,
    onPressIn: propTypes.func, // What to do on press in
    onPressOut: propTypes.func, // What to do on press out
    onLongPress: propTypes.func, // What to do on long press
    style: propTypes.any,
    textStyle: propTypes.any, // style for the button text
    disabled: propTypes.bool, // whether the button is disabled
    variation: propTypes.string, // a way to use predefined style variations (e.g. large, warning)
    testID: propTypes.string, // used for e2e testing
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node,
    ]).isRequired,
};

export default class Button extends PureComponent {
  static displayName = 'Button';

  static propTypes = buttonPropTypes;

  _computeActiveOpacity() {
      if (this.props.disabled) {
          return 1;
      }
      return colour.buttonActiveOpacity;
  }

  render() {
      const touchableProps = {
          activeOpacity: this._computeActiveOpacity(),
      };

      if (!this.props.disabled) {
          touchableProps.onPress = this.props.onPress || this.props.onClick;
          touchableProps.onPressIn = this.props.onPressIn;
          touchableProps.onPressOut = this.props.onPressOut;
          touchableProps.onLongPress = this.props.onLongPress;
      }

      // compute styles e.g. buttonGroupLeft, big, bigRight, buttonGroupText, bigText, but
      const groupStyle = [Styles.buttonGroup, this.props.style];

      const baseTextStyle = Styles.buttonText;
      const additionalTextStyles = this.props.textStyle && this.props.textStyle.length ? this.props.textStyle : [this.props.textStyle];

      const textStyle = [
          baseTextStyle,
          ...additionalTextStyles,
      ];

      return Platform.OS === 'android' && Platform.Version >= 21 ? (
          <View style={[{ opacity: this.props.disabled ? 0.5 : 1 }, this.props.androidContainerStyle]}>
              <TouchableNativeFeedback
                {...touchableProps}
                background={this.props.androidBackground || TouchableNativeFeedback.Ripple('rgba(255,255,255,.5)')}
                testID={this.props.testID}
                accessible={this.props.accessible}
                accessibilityLabel={this.props.accessibilityLabel}
              >
                  <View style={groupStyle}>
                      {Utils.reactChildIsString(this.props.children) ? (
                          <Text pointerEvents="none" style={textStyle}>
                              {this.props.children.length === 1 ? this.props.children[0] : this.props.children}
                          </Text>
                      ) : (
                          this.props.children
                      )}
                  </View>
              </TouchableNativeFeedback>
          </View>
      ) : (
          <View style={{ opacity: this.props.disabled ? 0.5 : 1 }}>
              <TouchableOpacity
                {...touchableProps}
                style={[
                    groupStyle,
                ]}
                accessible={this.props.accessible}
                accessibilityLabel={this.props.accessibilityLabel}
                testID={this.props.testID}
              >
                  {Utils.reactChildIsString(this.props.children) ? (
                      <Text pointerEvents="none" style={textStyle}>
                          {this.props.children.length === 1 ? this.props.children[0] : this.props.children}
                      </Text>
                  ) : (
                      this.props.children
                  )}
              </TouchableOpacity>
          </View>
      );
  }
}

export const ButtonPrimary = (props) => (
    <Button
      {...props}
      style={[styles.buttonPrimary, props.style]}
    />
);
ButtonPrimary.propTypes = buttonPropTypes;

export const ButtonPrimaryBookmaker = (props) => (
    <Button
      {...props}
      style={[{ backgroundColor: palette.bookmakerPrimary }, props.style]}
    />
);
ButtonPrimaryBookmaker.propTypes = buttonPropTypes;

export const ButtonSecondary = (props) => (
    <Button
      {...props}
      style={[{ backgroundColor: palette.secondary }, props.style]}
    />
);
ButtonSecondary.propTypes = buttonPropTypes;

export const ButtonTertiary = (props) => (
    <Button
      {...props}
      style={[styles.buttonTertiary,
          props.style,
      ]}
      textStyle={[styles.buttonTertiaryText, props.textStyle]}
    />
);
ButtonTertiary.propTypes = buttonPropTypes;


export const ButtonNav = (props) => Platform.select({
android: (
    <Button
        {...props}
        androidBackground={TouchableNativeFeedback.Ripple('rgba(0,0,0,.15)')}
        androidContainerStyle={styles.buttonNav}
        style={{ backgroundColor:'transparent' }}
        textStyle={[styles.buttonTertiaryText, props.textStyle]}
    />
),
    ios : (
        <Button
            {...props}
            style={styles.buttonNav}
            textStyle={[styles.buttonTertiaryText, props.textStyle]}
        />
    )
});
ButtonNav.propTypes = buttonPropTypes;


const styles = ReactNative.StyleSheet.create({
    TabButtonPill: {
        height: 34,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TabButtonPillText: {
        color: palette.primaryDark,
    },
    buttonNav: {
        backgroundColor: 'white',
        width: 44,
        height:44,
        borderRadius:22,
        overflow:"hidden"
    },
    buttonTertiary: {
        backgroundColor: 'white',
        borderColor: palette.primary,
        borderWidth: 1,
    },
    buttonTertiaryText: {
        color: palette.primary,
    },
    buttonTertiaryBookmaker: {
        backgroundColor: 'white',
        borderColor: palette.bookmakerPrimaryDark,
        borderWidth: 1,
    },
    buttonCommon: {
        backgroundColor: palette.racingPostLightGray,
    },
    buttonTertiaryBookmakerText: {
        color: palette.bookmakerPrimaryDark,
    },
    buttonPrimary: { backgroundColor: palette.primary },
});
