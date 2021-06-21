import * as React from "react";
import Loader from "./Loader";
import renderer from "react-test-renderer";


describe("<Loader />", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Loader />);
    expect(tree).toMatchSnapshot();
  });
});
