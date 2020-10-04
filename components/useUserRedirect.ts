import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { useAuth } from '../common/providers/useAuth';
import { AppState } from '../common/state-type';

export default function(): {user:AppState['user']} {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(()=>{
    if (!user && typeof window !== "undefined") {
      const redirect = encodeURIComponent(router.route);
      const as = encodeURIComponent(router.asPath);
      let path = `/login?redirect=${redirect}`;
      if (redirect !== as) {
        path += `&as=${as}`;
      }
      router.replace(path);
    }
  },[router, user])
  return {
    user
  }
}


