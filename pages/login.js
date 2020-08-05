import React, { Component } from "react";
import { withRouter } from "next/router";
import ErrorMessage from "components/Messages";
import withAuth from "common/providers/withAuth";
import { ButtonPrimary } from "components/base/forms/Button";

class LoginPage extends Component {
  static displayName = "LoginPage";

  constructor(props) {
    super(props);
    this.state = {
      email: "a@a.com",
      password: "password",
    };
    if (props.user) {
      const redir = Utils.fromParam().redirect;
      props.router.replace(redir || "/");
    }
  }

  login = (e) => {
    Utils.preventDefault(e);
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state: { index, isRegister, ...rest },
    } = this;
    this.props.login(rest, {
      onSuccess: (user) => {
        console.log(user);
        const redir = Utils.fromParam().redirect;
        this.props.router.replace(redir || "/");
      },
    });
  };

  render() {
    const {
      state: { email, password },
      props: { userLoading, userError },
    } = this;

    return (
        <div>
            <div id="content">
                <div className="container-fluid">
                    <form onSubmit={this.login}>
                        <h1>Login</h1>
                        <div>
                            <Input
                              className="mb-2 full-width"
                              placeholder="Username"
                              value={email}
                              onChange={(email) =>
                    this.setState({
                      email: Utils.safeParseEventValue(email),
                    })
                  }
                />
                        </div>
                        <div>
                            <Input
                              className="mb-2 full-width"
                              placeholder="Password"
                              value={password}
                              type="password"
                              onChange={(password) =>
                    this.setState({
                      password: Utils.safeParseEventValue(password),
                    })
                  }
                />
                        </div>
                        {userError && <ErrorMessage>{userError}</ErrorMessage>}
                        <div className="text-right">
                            <ButtonPrimary type="submit" disabled={userLoading}>
                                Login
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2019</span>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
}

export default withRouter(withAuth(LoginPage));
