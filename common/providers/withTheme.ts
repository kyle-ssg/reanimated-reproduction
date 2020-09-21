import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppActions, Callbacks } from '../app-actions';
import { AppState } from "../state-type";
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux'

export interface IWithTheme {
  theme?: AppState['theme'],
}

const withTheme = (WrappedComponent) => {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // todo: maybe action to refresh theme
    },
    dispatch
  );

function mapStateToProps(state: AppState) {
  const { theme } = state;
  return { theme };
}

export default withTheme;

export const useTheme = (): AppState['theme'] | null => {
  return useSelector((state:AppState)=>state.theme);
};
