import React, { FunctionComponent, useCallback } from "react";
import { ButtonNav } from "components/base/forms/Button"; // we need this to make JSX compile
import { useNavigation } from "@react-navigation/native";
type ComponentType = {tintColor?: string};

const ModalCloseButton: FunctionComponent<ComponentType> = ({}) => {
  const navigation = useNavigation();
  const pop = useCallback(() => {
    // @ts-ignore
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
