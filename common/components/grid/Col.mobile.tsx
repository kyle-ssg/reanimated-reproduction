import React, { FunctionComponent, useContext, useMemo } from 'react'
import { ColType } from './Col.type'
import {
  BreakpointContext,
  breakpointValues,
} from 'mobile/app/components/base/BreakpointProvider'
import { ViewStyle } from 'react-native' // we need this to make JSX compile

const TheComponent: FunctionComponent<ColType> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  xsBlock,
  xsHidden,
  smBlock,
  smHidden,
  mdBlock,
  mdHidden,
  lgBlock,
  lgHidden,
  xlBlock,
  xlHidden,
}) => {
  const breakpoint = useContext(BreakpointContext)
  const styles = useMemo(() => {
    const breakpointValue = breakpointValues[breakpoint]
    const _styles: ViewStyle[] = []
    if (xs || sm || md || lg || xl) {
      _styles.push(stylesSheet.col)

      if (!xs) {
        _styles.push(stylesSheet.col12)
      }
    }
    if (xs) _styles.push(stylesSheet[`col${xs}`])
    if (xsHidden) _styles.push(stylesSheet.hidden)
    if (xsBlock) _styles.push(stylesSheet.block)
    if (xsOffset) _styles.push(stylesSheet[`offset${xsOffset}`])
    if (breakpointValue >= breakpointValues.sm) {
      if (sm) _styles.push(stylesSheet[`col${sm}`])
      if (smHidden) _styles.push(stylesSheet.hidden)
      if (smBlock) _styles.push(stylesSheet.block)
      if (smOffset) _styles.push(stylesSheet[`offset${smOffset}`])
    }
    if (breakpointValue >= breakpointValues.md) {
      if (md) _styles.push(stylesSheet[`col${md}`])
      if (mdHidden) _styles.push(stylesSheet.hidden)
      if (mdBlock) _styles.push(stylesSheet.block)
      if (mdOffset) _styles.push(stylesSheet[`offset${mdOffset}`])
    }
    if (breakpointValue >= breakpointValues.lg) {
      if (lg) _styles.push(stylesSheet[`col${lg}`])
      if (lgHidden) _styles.push(stylesSheet.hidden)
      if (lgBlock) _styles.push(stylesSheet.block)
      if (lgOffset) _styles.push(stylesSheet[`offset${lgOffset}`])
    }
    if (breakpointValue >= breakpointValues.xl) {
      if (lg) _styles.push(stylesSheet[`col${xl}`])
      if (xlHidden) _styles.push(stylesSheet.hidden)
      if (xlBlock) _styles.push(stylesSheet.block)
      if (xlOffset) _styles.push(stylesSheet[`offset${xlOffset}`])
    }
    return _styles
  }, [
    breakpoint,
    xs,
    sm,
    md,
    lg,
    xl,
    xsBlock,
    xsHidden,
    smBlock,
    smHidden,
    mdBlock,
    mdHidden,
    lgBlock,
    lgHidden,
    xlBlock,
    xlHidden,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
  ])
  return <View style={styles}>{children}</View>
}
const cols = [
  '8.333333333333332%',
  '16.666666666666664%',
  '25%',
  '33.33333333333333%',
  '41.66666666666667%',
  '50%',
  '58.333333333333336%',
  '66.66666666666666%',
  '75%',
  '83.33333333333334',
  '91.66666666666666%',
  '100%',
]
const stylesSheet = ReactNative.StyleSheet.create({
  hidden: {
    display: 'none',
  },
  block: {
    display: 'flex',
  },
  col: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  col1: {
    width: cols[0],
  },
  col2: {
    width: cols[1],
  },
  col3: {
    width: cols[2],
  },
  col4: {
    width: cols[3],
  },
  col5: {
    width: cols[4],
  },
  col6: {
    width: cols[5],
  },
  col7: {
    width: cols[6],
  },
  col8: {
    width: cols[7],
  },
  col9: {
    width: cols[8],
  },
  col10: {
    width: cols[9],
  },
  col11: {
    width: cols[10],
  },
  col12: {
    width: cols[11],
  },
  offset1: {
    marginLeft: cols[0],
  },
  offset2: {
    marginLeft: cols[1],
  },
  offset3: {
    marginLeft: cols[2],
  },
  offset4: {
    marginLeft: cols[3],
  },
  offset5: {
    marginLeft: cols[4],
  },
  offset6: {
    marginLeft: cols[5],
  },
  offset7: {
    marginLeft: cols[6],
  },
  offset8: {
    marginLeft: cols[7],
  },
  offset9: {
    marginLeft: cols[8],
  },
  offset10: {
    marginLeft: cols[9],
  },
  offset11: {
    marginLeft: cols[10],
  },
  offset12: {
    marginLeft: cols[11],
  },
})
export default TheComponent
