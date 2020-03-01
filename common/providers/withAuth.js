import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../app-actions';

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
    createAddress: AppActions.createAddress,
    updateAddress: AppActions.updateAddress,
    updateUser: AppActions.updateUser,
}, dispatch);

function mapStateToProps(state) {
    const {user, userLoading, addressError, addressLoading, userError} = state;
    return {user, userLoading, userError, addressError, addressLoading};
}

export default (withAuth);
