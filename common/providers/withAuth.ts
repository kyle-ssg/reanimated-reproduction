import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppActions, Callbacks } from '../app-actions';
import { AppState } from "../state-type";

// todo: this is deprecated, use useAuth hook

export type IWithAuth = {
  register: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  login: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  logout: (callbacks?:Callbacks)=>void,
  confirmEmail: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  updateUser: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  user: AppState['user'],
  userLoading: AppState['userLoading'],
  userError: AppState['userError'],
}

const withAuth = (WrappedComponent) => {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register: AppActions.register,
      login: AppActions.login,
      logout: AppActions.logout,
      confirmEmail: AppActions.confirmEmail,
      updateUser: AppActions.updateUser,
    },
    dispatch
  );

function mapStateToProps(state: AppState) {
  const { user, userLoading, addressError, addressLoading, userError } = state;
  return { user, userLoading, userError, addressError, addressLoading };
}

export default withAuth;
