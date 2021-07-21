import * as React from 'react'
import Row from './Row'
import renderer from 'react-test-renderer'

describe('<Row />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Row />)
    expect(tree).toMatchSnapshot()
  })
})
