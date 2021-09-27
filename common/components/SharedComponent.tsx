import React, { FunctionComponent } from 'react'
import 'project/polyfill'
import Fade from './animation/Fade'
type ComponentType = {}
const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  return (
    <Fade duration={5000} value={1} autostart>
      <Row>
        <Text style={Styles.mr5}>Hi</Text>
        <Text style={Styles.mr5}>Hi2</Text>
        <View style={[{ flex: 1, height: 10, backgroundColor: 'red' }]}></View>
      </Row>
    </Fade>
  )
}

export default SharedComponent
