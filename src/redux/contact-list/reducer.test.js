/* eslint-disable no-undef */
import { ContactListTypes } from './types';
import contactListReducer from './reducer';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

describe('contact-list reducer', () => {
  test('contactListReducer should return loading:true on "FETCH_CONTACT_LIST_REQUEST"', () => {
    const newState = contactListReducer(undefined, { type: ContactListTypes.FETCH_CONTACT_LIST_REQUEST });
    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });
  test('contactListReducer should return data:{} on "FETCH_CONTACT_LIST_SUCCESS"', () => {
    const newState = contactListReducer(undefined, { type: ContactListTypes.FETCH_CONTACT_LIST_SUCCESS, payload: {} });
    expect(newState).toEqual({ ...INITIAL_STATE, data: {} });
  });
  test('contactListReducer should return data:{} on "FETCH_CONTACT_LIST_SUCCESS"', () => {
    const newState = contactListReducer(undefined, { type: ContactListTypes.FETCH_CONTACT_LIST_FAILURE, payload: 'error message' });
    console.log('newState:', newState);
    expect(newState).toEqual({ ...INITIAL_STATE, error: 'error message' });
  });
  test('contactListReducer should return INITIAL_STATE on "SOME_TEST_REQUEST"', () => {
    const newState = contactListReducer(undefined, { type: 'SOME_TEST_REQUEST' });
    expect(newState).toEqual({ ...INITIAL_STATE });
  });
});
