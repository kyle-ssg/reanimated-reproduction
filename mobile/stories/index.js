import React from "react";
import "react-native-globals";
import "../app/style/style_screen";
import "../app/components/base";
import ION from "react-native-vector-icons/Ionicons";
import StorybookUIRoot, {
  getStory,
  withPaddedContainer,
  withNavbarWrapper,
  setup,
} from "./setup";
import SharedElementExample from "../app/screens/examples/SharedElementExample";
import ErrorMessage from "../app/components/ErrorMessage";
// import ExampleTabs from './examples/ExampleTabs';
import Button, { ButtonNav } from "../app/components/base/forms/Button";
import StackExample from "./examples/StackExample";
import SegmentedControl from "components/SegmentedControl";
import ExampleTabs from "./examples/ExampleTabs";
import WithSetValue from "../../common/providers/WithSetValue";
import BottomDrawer from "components/BottomDrawer";
import CustomModal from "components/CustomModal";
import TestComponent from './TestComponent'
setup(() => {
  getStory("Modal").add("all", () => (
      <WithSetValue defaultValue={false}>
          {({ value, setValue }) => (
              <>
                  <CustomModal
                    dark
                    onDismissPress={() => setValue(false)}
                    visible={value}
                  />
                  <Button onPress={() => setValue(true)}>
                      {`Toggle Modal(${value})`}
                  </Button>
              </>
      )}
      </WithSetValue>
  ));
});

export default StorybookUIRoot;
