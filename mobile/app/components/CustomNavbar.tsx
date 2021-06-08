import React, { FunctionComponent, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  style?: ReactNative.ViewStyle;
  titleStyle?: ReactNative.ViewStyle;
  title: string;
};

const CustomNavbar: React.FC<Props> = ({ style, title, titleStyle }) => {
  const navigation = useNavigation();
  const pop = useCallback(() => {
    navigation.pop();
  }, [navigation]);
  return (
    <Row style={[styles.navbar, style]}>
      {navigation.canGoBack() && (
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={pop}>
            <ION style={styles.icon} name="ios-chevron-back" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.titleContainer}>
        <H4 style={[styles.title, titleStyle]}>{title}</H4>
      </View>
    </Row>
  );
};

const navHeight = styleVariables.insets.top + 44;
const styles = ReactNative.StyleSheet.create({
  titleContainer: {
    height: 44,
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  buttonContainer: {
    width: 34,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  leftContainer: {
    justifyContent: "center",
    position: "absolute",
    left: 20,
    top: styleVariables.insets.top,
    bottom: 0,
  },
  icon: {
    fontSize: 24,
  },
  navbar: {
    position: "relative",
    paddingTop: styleVariables.insets.top,
    justifyContent: "center",
    alignItems: "flex-end",
    height: navHeight,
    backgroundColor: "transparent",
  },
});

export default CustomNavbar;
