import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppActions } from '../app-actions';
import { AppState } from '../state-type';

const withAuth = (WrappedComponent) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);
};

const mapDispatchToProps = dispatch => bindActionCreators({
    register: AppActions.register,
    login: AppActions.login,
    logout: AppActions.logout,
    confirmEmail: AppActions.confirmEmail,
    updateUser: AppActions.updateUser,
}, dispatch);

function mapStateToProps(state:AppState) {
    const { user, userLoading, addressError, addressLoading, userError } = state;
    return { user, userLoading, userError, addressError, addressLoading };
}

export default (withAuth);
