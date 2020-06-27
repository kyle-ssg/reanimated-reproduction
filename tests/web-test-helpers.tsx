
import React from "react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { mockRequest, renderWithStore } from '../common/tests/test-helpers';
import { Store } from 'redux';
import { RenderResult } from '@testing-library/react';

// Renders with nextjs router support
export function renderWithRouter(
  router: NextRouter,
  children,
) {
  return (
    <RouterContext.Provider
      value={router}
    >
      {children}
    </RouterContext.Provider>
  );
}

// Render with a store and router support
export function renderWithStoreAndRouter(
  store: Store,
  router: NextRouter,
  children,
) {
  return renderWithStore( store, renderWithRouter(router, children))
}

// Render with a store and router support
export function reRenderWithStoreAndRouter(
  originalRender:RenderResult,
  store: Store,
  router: NextRouter,
  children,
) {
  return renderWithStore( store, renderWithRouter(router, children))
}

export function loginSuccess(store:Store, userData = {
  token:"token",
  firstName: "user"
}) {
  mockRequest(userData);
  store.dispatch(AppActions.login({}));
}
