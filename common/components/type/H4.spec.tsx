import * as React from 'react'
import H4 from './H4'
import renderer from 'react-test-renderer'

describe('<H4 />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<H4>Example Title</H4>)
    expect(tree).toMatchSnapshot()
  })
})
