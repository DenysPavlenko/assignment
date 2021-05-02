/* eslint-disable no-undef */
import { ContactListTypes } from './types';
import { fetchContactListRequest, fetchContactListSuccess, fetchContactListFailure } from './actions';

describe('contact-list actions', () => {
  test('Should return "FETCH_CONTACT_LIST_REQUEST" type', () => {
    const res = fetchContactListRequest();
    expect(res).toEqual({ type: ContactListTypes.FETCH_CONTACT_LIST_REQUEST });
  });
  test('Should return "FETCH_CONTACT_LIST_SUCCESS" type and data payload', () => {
    const res = fetchContactListSuccess({});
    expect(res).toEqual({ type: ContactListTypes.FETCH_CONTACT_LIST_SUCCESS, payload: {} });
  });
  test('Should return "FETCH_CONTACT_LIST_FAILURE" type and error payload', () => {
    const res = fetchContactListFailure('error message');
    expect(res).toEqual({ type: ContactListTypes.FETCH_CONTACT_LIST_FAILURE, payload: 'error message' });
  });
});
