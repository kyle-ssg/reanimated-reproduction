import * as React from 'react'
import FormGroup from './FormGroup'
import renderer from 'react-test-renderer'

describe('<FormGroup />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<FormGroup></FormGroup>)
    expect(tree).toMatchSnapshot()
  })
})
