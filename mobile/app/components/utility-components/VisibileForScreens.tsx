import { FC, ReactNode, useEffect, useState } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { AppState } from 'common/types/state-type'
import { RouteUrls } from '../../route-urls'
import Fade from 'components/base/animation/Fade'
import { ViewStyle } from 'react-native'

interface Props {
  activeScreen: AppState['activeScreen']
  target: RouteUrls[]
  navigator?: string
  style: ViewStyle
  children: ReactNode
}

//Use this to make an absolute view persist across multiple native screens
//You can put this within a NavigationContainer component to appear above the navbar
const VisibleForScreens: FC<Props> = ({
  children,
  activeScreen,
  style,
  target,
  navigator = 'root',
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  useEffect(() => {
    if (activeScreen) {
      setIsActive(target.includes(activeScreen[navigator]))
    }
  }, [activeScreen, navigator, target])
  return (
    <Fade style={style} value={isActive ? 1 : 0}>
      {children}
    </Fade>
  )
}

function mapStateToProps(state: AppState) {
  const { activeScreen } = state
  return { activeScreen }
}

export default connect(mapStateToProps)(VisibleForScreens)
