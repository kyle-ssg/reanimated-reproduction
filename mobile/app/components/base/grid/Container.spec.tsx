import * as React from "react";
import Container from "./Container";
import renderer from "react-test-renderer";


describe("<Container />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Container />);
    expect(tree).toMatchSnapshot();
  });
});
