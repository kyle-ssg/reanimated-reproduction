import * as React from "react";
import H2 from "./H2";
import renderer from "react-test-renderer";


describe("<H2 />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<H2>Example Title</H2>);
    expect(tree).toMatchSnapshot();
  });
});
