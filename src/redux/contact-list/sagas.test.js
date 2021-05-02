import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
/* eslint-disable no-undef */
import { ContactListTypes } from './types';
import { fetchContactListData, contactListService, fetchContactListDataWorker } from './sagas';

describe('fetchContactListData', () => {
  const genObject = fetchContactListData();
  it('should wait for FETCH_CONTACT_LIST_REQUEST action and call fetchContactListDataWorker', () => {
    expect(genObject.next().value)
      .toEqual(takeLatest(ContactListTypes.FETCH_CONTACT_LIST_REQUEST, fetchContactListDataWorker));
  });
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('fetchContactListDataWorker', () => {
  it('should call api and dispatch success action', async () => {
    const dummyData = { a: [] };
    contactListService.getContacts = jest.fn(() => Promise.resolve(dummyData));
    const dispatched = [];
    await runSaga({
      dispatch: action => dispatched.push(action)
    }, fetchContactListDataWorker).toPromise();
    expect(contactListService.getContacts.mock.calls.length).toBe(1);
    expect(dispatched).toEqual([{ type: ContactListTypes.FETCH_CONTACT_LIST_SUCCESS, payload: dummyData }]);
  });
  it('should handle errors in case of fail', async () => {
    const error = { message: 'error message' };
    contactListService.getContacts = jest.fn(() => Promise.reject(error));
    const dispatched = [];
    await runSaga({
      dispatch: action => dispatched.push(action)
    }, fetchContactListDataWorker).toPromise();
    expect(contactListService.getContacts.mock.calls.length).toBe(1);
    expect(dispatched).toEqual([{ type: ContactListTypes.FETCH_CONTACT_LIST_FAILURE, payload: error.message }]);
  });
});
