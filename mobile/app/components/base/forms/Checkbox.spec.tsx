import * as React from "react";
// import Checkbox from "./Checkbox";
import renderer from "react-test-renderer";


describe.skip("<Checkbox />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Checkbox />);
    expect(tree).toMatchSnapshot();
  });
});
