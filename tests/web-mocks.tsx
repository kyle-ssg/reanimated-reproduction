
import React from "react";
import { NextRouter } from "next/router";
interface ExtendedRouter extends NextRouter{
  history: any,
}

export const mockRouter = (initialPath="") => {
  const router: ExtendedRouter  = {
    isLocaleDomain:true,
    isPreview:false,
    route: initialPath,
    pathname: "",
    basePath:"/",
    isReady:true,
    query: {

    },
    history: [initialPath],
    asPath: "",
    push: jest.fn().mockImplementation(async (url) => {
      router.history.push(url);
      router.route = url;
      return true
    }),
    replace: jest.fn().mockImplementation(async (url) => {
      router.route = url;
      router.history.push(url);
      return true
    }),
    reload: jest.fn(),
    back: jest.fn().mockImplementation(()=>{
      router.history.pop();
    }),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    isFallback: false,
    events: {
      on: () => jest.fn(),
      off: () => jest.fn(),
      emit: () => jest.fn()
    }
  };

  return router;
}

