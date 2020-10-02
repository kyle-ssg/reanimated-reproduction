import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import ErrorMessage from "components/Messages";
import withAuth from "common/providers/withAuth";
import { ButtonPrimary } from "components/base/forms/Button";

type SuccessHandler = (user: unknown) => void;
type Login = ({ email, password }: { email: string, password: string}, { onSuccess }: { onSuccess: SuccessHandler }) => void
interface Props {
  user?: unknown;
  userLoading: boolean;
  userError: string;
  login: Login
}
const LoginPage: React.FC<Props> = ({ user, userLoading, userError, login }) => {
  const router = useRouter();

  const [ loginData, setLoginData ] = useState({ 
    email: "a@a.com",
    password: "password"
  });

  useEffect(() => {
    user && router.replace(Utils.fromParam().redirect || "/")
  }, [user, router]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: !loginData[event.target.value]
    }));

  const handleSubmit: React.FormEventHandler = (event) => {
    Utils.preventDefault(event);
    const callbacks = {
      onSuccess: () => {
        const redir = Utils.fromParam().redirect;
        router.replace(redir || "/");
      }
    }
    login(loginData, callbacks);
  };

  return (
      <div>
          <div id="content">
              <div className="container-fluid">
                  <form onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <div>
                          <Input
                            className="mb-2 full-width"
                            placeholder="Username"
                            name ="email"
                            value={loginData.email}
                            onChange={handleChange}
                          />
                      </div>
                      <div>
                          <Input
                            className="mb-2 full-width"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            type="password"
                            onChange={handleChange}
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
  )
};


export default withAuth(LoginPage);