import React, { Component } from "react";
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

setup(() => {
  getStory("SegmentedControl").add("all", () => {
    const items = [
      { label: "First", value: 1 },
      { label: "Second", value: 2 },
      { label: "Third", value: 3 },
    ];
    return (
      <Flex style={{ backgroundColor: "white", padding: 20 }}>
        <WithSetValue defaultValue={items[1]}>
          {({ value, setValue }) => (
            <SegmentedControl
              onChange={setValue}
              value={value}
              items={items}
              trackStyle={Styles.mb10}
            />
          )}
        </WithSetValue>
        <WithSetValue defaultValue={items[2]}>
          {({ value, setValue }) => (
            <SegmentedControl
              onChange={setValue}
              value={value}
              items={items}
              textActiveStyle={{ color: "#fff" }}
              textStyle={{ color: "#ccc" }}
              paddingX={10}
              paddingY={10}
              barStyle={{ backgroundColor: "#333" }}
              trackStyle={[
                { backgroundColor: "#222", height: 80 },
                Styles.mb10,
              ]}
            />
          )}
        </WithSetValue>
        <WithSetValue defaultValue={items[1]}>
          {({ value, setValue }) => (
            <SegmentedControl
              onChange={setValue}
              value={value}
              items={items}
              textActiveStyle={{ color: "#fff" }}
              textStyle={{ color: "#ccc" }}
              paddingX={0}
              paddingY={0}
              barStyle={{ backgroundColor: "#333" }}
              trackStyle={[{ backgroundColor: "#222" }, Styles.mb10]}
            />
          )}
        </WithSetValue>
      </Flex>
    );
  });
  getStory("Routes").add("all", () => <StackExample />);
  getStory("Tabs")
    .add("default", () => (
      <>
        <ExampleTabs />
      </>
    ))
    .add("scrolled", () => (
      <>
        <ExampleTabs scrollEnabled />
      </>
    ));
  getStory("Type")
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add("all", () => (
      <>
        <H1 style={Styles.mb5}>Header 1</H1>
        <H2 style={Styles.mb5}>Header 2</H2>
        <H3 style={Styles.mb5}>H4eader 3</H3>
        <H4 style={Styles.mb5}>Header 4</H4>
        <Bold style={Styles.mb5}>Header 4</Bold>
        <ErrorMessage style={Styles.mb5}>Header 4</ErrorMessage>
      </>
    ));
  getStory("Routes").add("all", () => <StackExample />);
  getStory("SharedElement")
    .addDecorator(withNavbarWrapper)
    .add("all", () => (
      <>
        <SharedElementExample />
        <SharedElementExample />
        <SharedElementExample />
        <SharedElementExample />
        <SharedElementExample />
        <SharedElementExample />
      </>
    ));
  getStory("Button")
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add("all", () => (
      <>
        <Button>Button</Button>
        <ButtonSecondary>Button Secondary</ButtonSecondary>
        <ButtonTertiary>Button Secondary</ButtonTertiary>
        <ButtonNav>
          <ION
            style={{
              color: palette.primary,
              fontSize: styleVariables.fontSizeH1,
            }}
            name="ios-close"
          />
        </ButtonNav>
      </>
    ))
    .add("default", () => <Button>Button</Button>)
    .add("secondary", () => <ButtonSecondary>Button Secondary</ButtonSecondary>)
    .add("tertiary", () => <ButtonTertiary>Button Secondary</ButtonTertiary>);
});

export default StorybookUIRoot;
