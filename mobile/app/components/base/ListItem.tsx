import React from "react";
import { Platform, TouchableNativeFeedback } from "react-native";

interface Props {
  accessible?: boolean;
  accessibilityLabel?: string;
  icon?: React.ReactNode;
  testID?:string;
  children: [React.ReactNode] | React.ReactNode;
  delay?: number;
  index?: number;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
  isEditable?: boolean;
}

const ListItem: React.FC<Props> = ({
  accessible,
  testID,
  accessibilityLabel,
  style,
  icon,
  disabled,
  children,
  onPress = null,
  delay = 0,
}) => {
  const content = (
    <View style={[Styles.ph5, style]}>
      <Row>
        <View style={Styles.pr5}>{icon}</View>
        <View style={[disabled && Styles.listItemDisabled]}>{children}</View>
      </Row>
    </View>
  );

  return onPress ? (
    <View style={style || Styles.listItem}>
      {Platform.OS === "android" ? (
        <TouchableNativeFeedback
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          onPress={disabled ? null : onPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          {content}
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          activeOpacity={0.8}
          onPress={disabled ? null : onPress}
        >
          {content}
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <View style={[style || Styles.listItem]}>{content}</View>
  );
};

export default ListItem;
