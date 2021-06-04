import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
import { NavigationContainerRef } from '@react-navigation/native';
export const navigationRef = React.createRef<NavigationContainerRef>();

type MenuType = {
  setShowMenu: (show:boolean)=>void,
  setNavigation: (navigation:any)=>void,
}
export const menuRef = React.createRef<MenuType>();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function resetTo(index, routes) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes
    })
  );
}
