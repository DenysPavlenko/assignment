import { createSelector } from 'reselect';

const contactListSelector = state => state.contactList;

export const selectContactList = createSelector(
  [contactListSelector],
  contactList => contactList
);
