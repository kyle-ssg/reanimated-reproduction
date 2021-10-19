import _store from '../../common/store'
import SecuredPage from '../../pages/secured'
import React from 'react'
import { mockRouter } from '../web-mocks'
import {
  loginSuccess,
  mockUserLoggedIn,
  renderWithStoreAndRouter,
  reRenderWithStoreAndRouter,
} from '../web-test-helpers'

describe('login redirect', function() {
  it('should redirect for a logged out user', async function() {
    const router = mockRouter("/secured")
    await renderWithStoreAndRouter( _store(null,true), router, <SecuredPage />);
    expect(router.history).toEqual([ '/secured', '/login?redirect=%2Fsecured&as=' ])
  });
  it('should redirect for a logged out user but then back when the user logs in', async function() {
    const store = _store(null,true);
    const router = mockRouter("/secured");
    const renderResult = await renderWithStoreAndRouter( store, router, <SecuredPage />);
    loginSuccess(store);
    await reRenderWithStoreAndRouter(renderResult,store,router,<SecuredPage/>)

    expect(router.history).toEqual([ '/secured', '/login?redirect=%2Fsecured&as=', ])
  });
  it.only('should not redirect if the user is already logged in', async function() {
    const router = mockRouter("/secured")
    mockUserLoggedIn();
    await renderWithStoreAndRouter( _store(undefined,false), router, <SecuredPage />);
    expect(router.history).toEqual([ '/secured' ])
  });
});
