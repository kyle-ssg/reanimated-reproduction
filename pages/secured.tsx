import React from "react";
import useUserRedirect from "../components/useUserRedirect";
import { useAuth } from '../common/providers/useAuth';

const SecuredPage = () => {
  useUserRedirect();
  const { logout } = useAuth()
  return (
    <div className="container-fluid">
      Secret page
      <Button onClick={()=>logout()}>Logout</Button>
    </div>
  )
}

SecuredPage.displayName = "SecuredPage";
export default SecuredPage;

