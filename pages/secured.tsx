import React from "react";
import { useRouter } from "next/router";
import withAuth from "../common/providers/withAuth";
import withUserRedirect from "../components/withUserRedirect";

const SecuredPage = () => { const router = useRouter(); return (<div className="container-fluid">Secret page</div>)}

SecuredPage.displayName = "SecuredPage";

export default withAuth(withUserRedirect(SecuredPage));

