import * as React from "react";
import H1 from "./H1";
import renderer from "react-test-renderer";


describe("<H1 />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<H1>Example Title</H1>);
    expect(tree).toMatchSnapshot();
  });
});
