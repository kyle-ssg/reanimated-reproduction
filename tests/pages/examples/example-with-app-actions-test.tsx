import _store from '../../../common/store';
import SecuredPage from '../../../pages/secured'
import HomePage from '../../../pages/index'
import React from 'react';
import { mockRouter } from '../../web-mocks';
import { loginSuccess, renderWithStoreAndRouter, reRenderWithStoreAndRouter } from '../../web-test-helpers';
import { Actions } from '../../../common/app-actions';
import { mockRequest } from '../../../common/tests/test-helpers';

describe('securedPage', function() {
    const store = _store();
    it('should redirect for a logged out user but then back when the user logs in', async function() {
        const router = mockRouter("/secured")
        const renderResult = renderWithStoreAndRouter( store, router, <SecuredPage />);
        // Mock saga request returning user, call action
        mockRequest({firstName:"User"})
        store.dispatch(AppActions.login({}));
        //Check render result
        await reRenderWithStoreAndRouter(renderResult,store,router,<HomePage/>)
        expect(renderResult.findByText('User')).not.toThrow()
    });
});
