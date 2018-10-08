import { Component } from 'react';
import AccountStore from '../stores/account-store';

const TheComponent = class extends Component {
  static displayName = 'TheComponent';

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: AccountStore.isLoading,
      user: AccountStore.getUser(),
    };
  }

  componentDidMount() {
    ES6Component(this);

    const { props: { onLogin, onSave, onLogout } } = this;


    this.listenTo(AccountStore, 'change', () => {
      this.setState({
        isLoading: AccountStore.isLoading,
        isSaving: AccountStore.isSaving,
        user: AccountStore.getUser(),
        error: AccountStore.error,
      });
    });

    this.listenTo(AccountStore, 'loaded', () => {
      if (onLogin) {
        onLogin();
      }
    });

    this.listenTo(AccountStore, 'saved', () => {
      if (onSave) {
        onSave(AccountStore.savedId);
      }
    });

    this.listenTo(AccountStore, 'logout', () => {
      this.setState({
        isLoading: false,
        isSaving: false,
        organisation: AccountStore.getOrganisation(),
        user: AccountStore.getUser(),
      });
      if (onLogout) {
        onLogout();
      }
    });

    this.listenTo(AccountStore, 'problem', () => {
      this.setState({
        isLoading: AccountStore.isLoading,
        isSaving: AccountStore.isSaving,
        error: AccountStore.error,
      });
    });
  }


  login = (details) => {
    AppActions.login(details);
  };

  loginDemo = () => {
    AppActions.login(Project.demoAccount);
  };

  register = (details, isInvite) => {
    AppActions.register(details, isInvite);
  };

  render() {
    const {
      state: { isLoading, isSaving, user, organisation, error },
      props: { children },
    } = this;
    return (
      children({
        isLoading,
        isSaving,
        user,
        organisation,
        error,
      }, {
        login: this.login,
        register: this.register,
      })
    );
  }
};

TheComponent.propTypes = {
  children: propTypes.func,
  onLogin: propTypes.func,
  onLogout: propTypes.func,
  onSave: propTypes.func,
};

export default TheComponent;
