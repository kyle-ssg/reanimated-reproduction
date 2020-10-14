import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: any;
}

const ErrorMessage: React.FC<Props> = ({ style, children }) => {
  if (!children) {
    return null;
  }
  return (
    <View style={[style]}>
      <Text style={styles.ErrorMessageText}>
        {typeof children === "string" ? children : "Error processing request"}
      </Text>
    </View>
  );
};

export default ErrorMessage;

const styles = ReactNative.StyleSheet.create({
  ErrorMessageText: {
    color: palette.danger,
  },
});
