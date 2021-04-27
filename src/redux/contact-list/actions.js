import { ContactListTypes } from './types';

export const fetchContactListRequest = () => ({
  type: ContactListTypes.FETCH_CONTACT_LIST_REQUEST,
});
export const fetchContactListSuccess = data => ({
  type: ContactListTypes.FETCH_CONTACT_LIST_SUCCESS,
  payload: data
});
export const fetchContactListFailure = error => ({
  type: ContactListTypes.FETCH_CONTACT_LIST_FAILURE,
  payload: error
});
