import _store from '../../common/store';
import SecuredPage from '../../pages/secured'
import HomePage from '../../pages/index'
import React from 'react';
import { mockRouter } from '../web-mocks';
import { loginSuccess, renderWithStoreAndRouter, reRenderWithStoreAndRouter } from '../web-test-helpers';
import { Actions } from '../../common/app-actions';
import { mockRequest } from '../../common/tests/test-helpers';

describe('securedPage', function() {
    it('should redirect for a logged out user', async function() {
        const store = _store();
        const router = mockRouter("/secured")
        renderWithStoreAndRouter( store, router, <SecuredPage />);
        expect(router.history).toEqual([ '/secured', '/login?redirect=%2Fsecured&as=' ])
    });
    it('should redirect for a logged out user but then back when the user logs in', async function() {
        const store = _store();
        const router = mockRouter("/secured")
        const renderResult = renderWithStoreAndRouter( store, router, <SecuredPage />);
        loginSuccess(store);
        reRenderWithStoreAndRouter(renderResult,store,router,<HomePage/>)
        expect(router.history).toEqual([ '/secured', '/login?redirect=%2Fsecured&as=', ])
    });
    it('should not redirect if the user is already logged in', async function() {
        const store = _store();
        const router = mockRouter("/secured")
        loginSuccess(store);
        const renderResult = renderWithStoreAndRouter( store, router, <SecuredPage />);
        expect(router.history).toEqual([ '/secured' ])
    });
});
