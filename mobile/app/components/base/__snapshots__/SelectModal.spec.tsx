import * as React from 'react'
import SelectModal from '../SelectModal'
import renderer from 'react-test-renderer'

describe('<SelectModal />', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<SelectModal />)
    expect(tree).toMatchSnapshot()
  })
})
