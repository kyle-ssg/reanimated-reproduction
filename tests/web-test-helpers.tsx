
import React from "react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { mockRequest, renderWithStore } from '../common/tests/test-helpers';
import { Store } from 'redux';
import { RenderResult } from '@testing-library/react';
import _data from '../common/utils/_data';
// import { getInitialProps } from '../pages/_app';

// Renders with nextjs router support
export async function renderWithRouter(
  router: NextRouter,
  children,
  store
) {
  // await getInitialProps({ Component:null,  ctx: {  query:null, AppTree:null, isServer: true, store: store, pathname: "/" } })
  return (
      <RouterContext.Provider
        value={router}
      >
        {children}
      </RouterContext.Provider>
  );
}

// Render with a store and router support
export async function renderWithStoreAndRouter(
  store: Store,
  router: NextRouter,
  children,
) {
  const res = await renderWithRouter(router, children, store);
  return renderWithStore( store, res)
}

// Render with a store and router support
export async function reRenderWithStoreAndRouter(
  originalRender:RenderResult,
  store: Store,
  router: NextRouter,
  children,
) {
  const res = await renderWithRouter(router, children, store);
  return renderWithStore( store, res)
}

export function loginSuccess(store:Store, userData = {
  token:"token",
  firstName: "user"
}) {
  mockRequest(userData);
  store.dispatch(AppActions.login({}));
}

export function mockUserLoggedIn() {
  jest.spyOn(API, 'getStoredToken').mockResolvedValueOnce("token")
}
