import { ContactListTypes } from './types';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactListTypes.FETCH_CONTACT_LIST_REQUEST:
      return {
        loading: true,
        data: null,
        error: null
      };
    case ContactListTypes.FETCH_CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      };
    case ContactListTypes.FETCH_CONTACT_LIST_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
