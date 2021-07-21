import * as React from 'react'
import Flex from './Flex'
import renderer from 'react-test-renderer'

describe('<Flex />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Flex />)
    expect(tree).toMatchSnapshot()
  })
})
