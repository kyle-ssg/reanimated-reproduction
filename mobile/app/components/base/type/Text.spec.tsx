import * as React from 'react'
import Text from './Text'
import renderer from 'react-test-renderer'

describe('<Text />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Text />)
    expect(tree).toMatchSnapshot()
  })
})
