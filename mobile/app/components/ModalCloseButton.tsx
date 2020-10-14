import React, { FunctionComponent, useCallback } from "react";
import { ButtonNav } from "components/base/forms/Button"; // we need this to make JSX compile
import { useNavigation } from "@react-navigation/native";
type ComponentType = {};

const ModalCloseButton: FunctionComponent<ComponentType> = ({}) => {
  const navigation = useNavigation();
  const pop = useCallback(() => {
    navigation.pop();
  }, [navigation]);
  return (
    <ButtonNav onPress={pop}>
      <ION
        style={{
          color: palette.primary,
          fontSize: styleVariables.fontSizeH1,
        }}
        name="ios-close"
      />
    </ButtonNav>
  );
};

export default ModalCloseButton;
