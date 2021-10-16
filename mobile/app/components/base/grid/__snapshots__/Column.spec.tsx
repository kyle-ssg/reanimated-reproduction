import * as React from 'react'
import Column from '../Column'
import renderer from 'react-test-renderer'

describe('<Column />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Column />)
    expect(tree).toMatchSnapshot()
  })
})
