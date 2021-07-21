import * as React from 'react'
// import Fade from "./Fade";
import renderer from 'react-test-renderer'

describe.skip('<Fade />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Fade />)
    expect(tree).toMatchSnapshot()
  })
})
