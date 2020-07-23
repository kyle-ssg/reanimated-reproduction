import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react'; // we need this to make JSX compile
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { AppState } from '../state-type';
import { RouteUrls } from '../route-urls';
import { boolean } from '@storybook/addon-knobs';
import { StyleProp } from 'react-native';
import { SafeAreaInsetsContext, SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

type ComponentType = {
    activeScreen: AppState["activeScreen"];
    target: RouteUrls[];
    navigator?:string;
    style: ReactNative.ViewStyle,
    children: ReactNode;
}

const VisibleForScreens: FunctionComponent<ComponentType> = ({ children,activeScreen, style, target, navigator="root" }) => {
    const [isActive, setIsActive] = useState<boolean>()
    useEffect(()=> {
        if (activeScreen) {
            setIsActive(target.includes(activeScreen[navigator]))
        }
    },[activeScreen, activeScreen])
    return (
      <Fade style={style} value={isActive}>
          {children}
      </Fade>
    );
};


function mapStateToProps(state:AppState) {
    const { activeScreen } = state;
    return { activeScreen };
}


export default connect(
    mapStateToProps,
)(VisibleForScreens);
