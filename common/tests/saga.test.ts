import { expectSaga } from 'redux-saga-test-plan';
import saga from '../saga';
import '../../project/api';
import reducer from '../reducer';
import { AppActions } from '../app-actions';
import { mockRequest, sagaWithReducer } from './test-helpers';

describe.only('saga',()=>{
  describe('startup', ()=>{
    it('startup with token', ()=>{
      const token = "abcd";
      return sagaWithReducer(saga)
        .dispatch(
          AppActions.startup({
            token
          })
        )
        .put({ type:'LOGIN_LOADED', data:{ user:{} } }) //Expected response
        .put({ type:'STARTUP_LOADED', data:{  ready: true, isOnline: true, token } })
        .silentRun()
    })
    it('startup without token', ()=>{
      return sagaWithReducer(saga)
        .dispatch(
          AppActions.startup({})
        )
        .put({ type:'STARTUP_LOADED', data:{ ready: true, isOnline: true } })  //Expected response
        .silentRun();
    })
  })
  describe('login', ()=> {
    it('login', ()=> {
      const action = AppActions.login({ email:"kyle@bla.com" });
      const APIResponse = mockRequest({ a:1, email:"kyle@bla.com" });
      const identifySpy = jest.spyOn(API, 'identify');

      return sagaWithReducer(saga)
        .dispatch(action)  // Dispatch any actions that the saga will `take`.
        .put({ type:'LOGIN_LOADED', data:APIResponse }) // Assert that the `put` will eventually happen.
        .hasFinalState({  // Test reducer state
          userError: null,
          userLoading: false,
          user: APIResponse,
        })
        .silentRun()
        .then(()=>{
          expect(identifySpy).toHaveBeenCalledWith("kyle@bla.com");  // Check that spy was called
        })
    })
  })
})
