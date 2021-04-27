import { takeLatest, put } from 'redux-saga/effects';
import { fetchContactListRequest, fetchContactListSuccess, fetchContactListFailure } from './actions';
import ContactListService from 'services/contact-list-service';
const contactListService = new ContactListService();

function* fetchContactListDataWorker() {
  try {
    const data = yield contactListService.getContacts();
    yield put(fetchContactListSuccess(data));
  } catch ({ message }) {
    yield put(fetchContactListFailure(message));
  }
}

export function* fetchContactListData() {
  yield takeLatest(fetchContactListRequest().type, fetchContactListDataWorker);
}
