import * as React from "react";
// import Select from "./Select";
import renderer from "react-test-renderer";


describe.skip("<Select />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Select />);
    expect(tree).toMatchSnapshot();
  });
});
