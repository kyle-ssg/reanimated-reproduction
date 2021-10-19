import saga from '../../saga'
import '../../../project/api'
import { AppActions } from '../../app-actions'
import { mockRequest, sagaWithReducer } from '../test-helpers'

describe('saga with fake REST call and check API.identify is called', ()=> {
  it('sets the correct reducer state', ()=> {
    // Call an action for a saga to pick up
    // Mock an API reponse
    // Check the result against the reducer
    // check that API function was called
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
