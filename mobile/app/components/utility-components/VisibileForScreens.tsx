import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react"; // we need this to make JSX compile
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { AppState } from "common/state-type";
import { RouteUrls } from "../../route-urls";

interface Props {
  activeScreen: AppState["activeScreen"];
  target: RouteUrls[];
  navigator?: string;
  style: ReactNative.ViewStyle;
  children: ReactNode;
}

//Use this to make an absolute view persist across multiple native screens
//You can put this within a NavigationContainer component to appear above the navbar
const VisibleForScreens: React.FC<Props> = ({
  children,
  activeScreen,
  style,
  target,
  navigator = "root",
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (activeScreen) {
      setIsActive(target.includes(activeScreen[navigator]));
    }
  }, [activeScreen, navigator, target]);
  return (
    <Fade style={style} value={isActive}>
      {children}
    </Fade>
  );
};

function mapStateToProps(state: AppState) {
  const { activeScreen } = state;
  return { activeScreen };
}

export default connect(mapStateToProps)(VisibleForScreens);
