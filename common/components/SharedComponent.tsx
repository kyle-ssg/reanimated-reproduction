import React, { FunctionComponent } from 'react'
import Row from './grid/Row' // we need this to make JSX compile
import Styles from 'common/style/_style_screen'
type ComponentType = {}

const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  return (
    <Row>
      <Text style={Styles.mr5}>Hi</Text>
      <Text>Hi2</Text>
      <Flex style={{ backgroundColor: 'red', height: 10 }}></Flex>
    </Row>
  )
}

export default SharedComponent
