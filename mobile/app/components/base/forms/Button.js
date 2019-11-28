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

      const baseTextStyle = { color: 'white', letterSpacing: 2, fontSize: 14 };
      const additionalTextStyles = this.props.textStyle && this.props.textStyle.length ? this.props.textStyle : [this.props.textStyle];

      const textStyle = [
          baseTextStyle,
          ...additionalTextStyles,
      ];

      return Platform.OS === 'android' && Platform.Version >= 21 ? (
          <View style={{ opacity: this.props.disabled ? 0.5 : 1 }}>
              <TouchableNativeFeedback
                {...touchableProps}
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.5)')}
                testID={this.props.testID}
                accessible={this.props.accessible}
                accessibilityLabel={this.props.accessibilityLabel}
              >
                  <View style={groupStyle}>
                      {typeof this.props.children === 'string' ? (
                          <Text style={textStyle}>{this.props.children.toUpperCase()}</Text>
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
                    this.props.disabled && { backgroundColor: pallette.primaryDarkAlt },
                ]}
                accessible={this.props.accessible}
                accessibilityLabel={this.props.accessibilityLabel}
                testID={this.props.testID}
              >
                  {typeof this.props.children === 'string' ? (
                      <Text pointerEvents="none" style={textStyle}>
                          {this.props.children}
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
      style={[{ backgroundColor: pallette.bookmakerPrimary }, props.style]}
    />
);
ButtonPrimaryBookmaker.propTypes = buttonPropTypes;

export const ButtonSecondary = (props) => (
    <Button
      {...props}
      style={[{ backgroundColor: pallette.secondary }, props.style]}
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

export const ButtonTertiaryBookmaker = (props) => (
    <Button
      {...props}
      style={[
          styles.buttonTertiaryBookmaker,
          props.style,
      ]}
      textStyle={[styles.buttonTertiaryBookmakerText, props.textStyle]}
    />
);
ButtonTertiaryBookmaker.propTypes = buttonPropTypes;

export const ButtonAlt = (props) => (
    <Button
      {...props}
      style={[{ backgroundColor: pallette.primaryDark }, props.style]}
    />
);
ButtonAlt.propTypes = buttonPropTypes;

export const ButtonFlat = (props) => (
    <Button {...props} style={[Styles.buttonWhiteShadow, props.style]} />
);
ButtonFlat.propTypes = buttonPropTypes;

export const ButtonDashed = (props) => (
    <Button {...props} style={[Styles.buttonDashed, props.style]} />
);
ButtonDashed.propTypes = buttonPropTypes;

export const ButtonOutlinePrimary = (props) => (
    <Button {...props} style={[Styles.buttonOutlinePrimary, props.style]} />
);
ButtonOutlinePrimary.propTypes = buttonPropTypes;

export const ButtonGoogle = (props) => (
    <Button
      {...props}
      style={[styles.buttonGoogle, props.style]}
    />
);
ButtonGoogle.propTypes = buttonPropTypes;

export const ButtonCommon = (props) => (
    <Button
      {...props}
      style={[styles.buttonCommon, props.style]}
      textStyle={[{
          color: pallette.text,
      }, props.textStyle]}
    />
);
ButtonCommon.propTypes = buttonPropTypes;

export const TabPillButton = (props) => (
    <Button {...props} style={[styles.TabButtonPill, props.style]}>
        <Text
          pointerEvents="none"
          style={[styles.TabButtonPillText, props.textStyle]}
        >
            {props.children}
        </Text>
    </Button>
);
TabPillButton.propTypes = buttonPropTypes;

export const LinkTextButton = (props) => (
    <Button {...props} style={[styles.LinkTextButton, props.style]}>
        <Text
          pointerEvents="none"
          style={[styles.LinkTextButtonText, props.textStyle]}
        >
            {props.children}
        </Text>
    </Button>
);
LinkTextButton.propTypes = buttonPropTypes;

const styles = StyleSheet.create({
    TabButtonPill: {
        height: 34,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TabButtonPillText: {
        color: pallette.primaryDark,
    },
    LinkTextButton: {
        backgroundColor: 'transparent',
        height: 'auto',
    },
    buttonTertiary: {
        backgroundColor: 'white',
        borderColor: pallette.primary,
        borderWidth: 1,
    },
    buttonTertiaryText: {
        color: pallette.primary,
    },
    buttonTertiaryBookmaker: {
        backgroundColor: 'white',
        borderColor: pallette.bookmakerPrimaryDark,
        borderWidth: 1,
    },
    buttonCommon: {
        backgroundColor: pallette.racingPostLightGray,
    },
    buttonTertiaryBookmakerText: {
        color: pallette.bookmakerPrimaryDark,
    },
    buttonGoogle: { backgroundColor: pallette.primaryDanger },
    LinkTextButtonText: {
        color: pallette.linkBlue,
    },
    buttonPrimary: { backgroundColor: pallette.primary },
});
