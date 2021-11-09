import React, { FunctionComponent } from 'react'
import { ColType } from './Col.type' // we need this to make JSX compile

const TheComponent: FunctionComponent<ColType> = ({ children }) => {
  return <View>{children}</View>
}

export default TheComponent
