import React, { FunctionComponent, useMemo } from 'react'
import { ColType } from './Col.type' // we need this to make JSX compile

const TheComponent: FunctionComponent<ColType> = ({
  children,
  xs,
  xsHidden,
  xsOffset,
  xsBlock,
  sm,
  smBlock,
  smHidden,
  smOffset,
  md,
  mdBlock,
  mdHidden,
  mdOffset,
  lg,
  lgBlock,
  lgHidden,
  lgOffset,
  xl,
  xlBlock,
  xlHidden,
  xlOffset,
}) => {
  const webClassName =
    getClassName('col', xs, sm, md, lg, xl) +
    getClassNameBool(
      'd',
      xsHidden,
      smHidden,
      mdHidden,
      lgHidden,
      xlHidden,
      'none',
    ) +
    getClassNameBool(
      'd',
      xsBlock,
      smBlock,
      mdBlock,
      lgBlock,
      xlBlock,
      'block',
    ) +
    getClassName('offset', xsOffset, smOffset, mdOffset, lgOffset, xlOffset)
  return <div className={webClassName}>{children}</div>
}

export default TheComponent

const getClassName = (prop, xs, sm, md, lg, xl) => {
  let name = ''
  if (xs) name += ` ${prop}-xs-${xs}`
  if (sm) name += ` ${prop}-sm-${sm}`
  if (md) name += ` ${prop}-md-${md}`
  if (lg) name += ` ${prop}-lg-${lg}`
  if (xl) name += ` ${prop}-xl-${xl}`
  return name
}

const getClassNameBool = (prop, xs, sm, md, lg, xl, propPostfix) => {
  let name = ''
  if (xs) name += ` ${prop}${propPostfix ? `-${propPostfix}` : ''}`
  if (sm) name += ` ${prop}-sm${propPostfix ? `-${propPostfix}` : ''}`
  if (md) name += ` ${prop}-md${propPostfix ? `-${propPostfix}` : ''}`
  if (lg) name += ` ${prop}-lg${propPostfix ? `-${propPostfix}` : ''}`
  if (xl) name += ` ${prop}-xl${propPostfix ? `-${propPostfix}` : ''}`
  return name
}
