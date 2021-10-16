import * as React from 'react'
import ListItem from '../ListItem'
import renderer from 'react-test-renderer'

describe('<ListItem />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<ListItem />)
    expect(tree).toMatchSnapshot()
  })
})
