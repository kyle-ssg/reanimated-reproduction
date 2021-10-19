import * as React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

describe('<Button />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Button />)
    expect(tree).toMatchSnapshot()
  })
})
