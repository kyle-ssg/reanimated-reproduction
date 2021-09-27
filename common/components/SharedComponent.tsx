import React, { FunctionComponent } from 'react' // we need this to make JSX compile
type ComponentType = {}

const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  return <Text>Hi</Text>
}

export default SharedComponent
