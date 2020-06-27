import React from 'react';
import { ExpectApi, expectSaga } from 'redux-saga-test-plan';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import '../../project/polyfill';
import _data from '../utils/_data';
import _store from '../store'
import reducer from '../reducer';
import { AppState } from '../state-type';
import { render, RenderResult } from '@testing-library/react';

// Makes it so that the next call to data.get|put|post|delete RESOLVES with <resolved>
export const mockRequest = (resolved:any) => {
  jest.spyOn(_data, '_request').mockResolvedValueOnce(resolved)
  return resolved;
}

// Makes it so that the next call to data.get|put|post|delete REJECTS with <resolved>
export const mockRequestFail = (resolved:any): void => {
  jest.spyOn(_data, '_request').mockRejectedValueOnce(resolved)
}

// Creates a saga and reducer with optional default state
export const sagaWithReducer = (saga,state={}): ExpectApi => expectSaga(saga)
  .withReducer(reducer)
  .withState(state)

// Render a component with a store
export const renderWithStore = (store:Store, children: JSX.Element): RenderResult => {
  return render(
    <Provider store={store}>
      {children}
    </Provider>
  )
}

// Re render a component, the render results get set to originalRender
export const reRenderWithStore = async (originalRender:RenderResult, store:Store, children: JSX.Element): Promise<void> => {
  await act(async () => {
    originalRender.rerender(
      <Provider store={store}>
        {children}
      </Provider>
    );
  });
}
