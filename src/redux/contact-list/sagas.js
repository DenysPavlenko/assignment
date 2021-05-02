import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchContactListRequest, fetchContactListSuccess, fetchContactListFailure } from './actions';
import ContactListService from 'services/contact-list-service';

export const contactListService = new ContactListService();

export function* fetchContactListDataWorker() {
  try {
    const data = yield call(contactListService.getContacts);
    yield put(fetchContactListSuccess(data));
  } catch ({ message }) {
    yield put(fetchContactListFailure(message));
  }
}

export function* fetchContactListData() {
  yield takeLatest(fetchContactListRequest().type, fetchContactListDataWorker);
}
