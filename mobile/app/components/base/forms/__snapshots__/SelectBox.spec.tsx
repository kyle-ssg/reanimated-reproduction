import * as React from 'react'
// import SelectBox from "./SelectBox";
import renderer from 'react-test-renderer'

describe.skip('<SelectBox />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<SelectBox />)
    expect(tree).toMatchSnapshot()
  })
})
