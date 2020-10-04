import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import ErrorMessage from "components/Messages";
import { ButtonPrimary } from "components/base/forms/Button";
import { useAuth } from '../common/providers/useAuth';


const LoginPage: React.FC<{ }> = () => {
  const { user, userLoading, userError, login } = useAuth()
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


export default LoginPage;
