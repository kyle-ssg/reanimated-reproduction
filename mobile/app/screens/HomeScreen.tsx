import React from "react";
import { Component } from "react";
import withScreen, { Screen } from "./withScreen";
import { RouteUrls } from "../route-urls";

type ComponentType = Screen & {};

class HomeScreen extends Component<ComponentType, { modalVisible: boolean }> {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
  }

  goGeneric = () => {
    this.props.push(RouteUrls.generic, {});
  };

  render() {
    return (
      <>
        <Flex style={Styles.body}>
          <Button onPress={this.goGeneric}>Go to a generic page</Button>
        </Flex>
      </>
    );
  }
}

export default withScreen(HomeScreen);
