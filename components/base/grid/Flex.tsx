import React from 'react'
import cn from 'classnames'

export type FlexType = {
  className?: string
  value?: number
  onClick?: () => void
}

//Div with flex
const Flex: React.FC<FlexType> = ({ className, value = 1, ...props }) => (
  <div {...props} className={cn({ flex: true }, `flex-${value}`, className)} />
)

Flex.displayName = 'Flex'
global.Flex = Flex
export default Flex
