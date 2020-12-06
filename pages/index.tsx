import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Button from "../components/base/forms/Button";
import { useAuth } from '../common/providers/useAuth';
import { Account } from "@cyberspace-dev/sdk";

const auth = async ()=> {
  const account = await Account.connect();
  const res = await account.signin('kyle@solidstategroup.com', '100389Kj');
  return res
}
const HomePage = () => {
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
