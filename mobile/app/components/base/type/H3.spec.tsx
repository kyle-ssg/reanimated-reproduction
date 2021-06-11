import * as React from "react";
import H3 from "./H3";
import renderer from "react-test-renderer";


describe("<H3 />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<H3>Example Title</H3>);
    expect(tree).toMatchSnapshot();
  });
});
