import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import withAuth from "common/providers/withAuth";
import Button from "../components/base/forms/Button";

const HomePage = ( { user } ) => {
  const router = useRouter();

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

export default withAuth(HomePage);
