import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Button from "../components/base/forms/Button";
import { useAuth } from '../common/providers/useAuth';

const HomePage = () => {
  const router = useRouter();
  const { user } = useAuth()
  useEffect(() => {
    if (user){API.loginRedirect()}
  },[user]);

  return (
      <div className="container">
          <Button>Click me!</Button>
        <Loader/>
          <p>Good morning</p>
      </div>
  )
};

HomePage.displayName = "HomePage";
// Do server rendered actions such as fetching data here
// HomePage.getInitialProps = async({ Component, ctx }) => {};

export default HomePage;