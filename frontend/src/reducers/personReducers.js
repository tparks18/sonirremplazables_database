import {
  PERSON_LIST_REQUEST,
  PERSON_LIST_SUCCESS,
  PERSON_LIST_FAIL,

  PERSON_DETAILS_REQUEST,
  PERSON_DETAILS_SUCCESS,
  PERSON_DETAILS_FAIL,
} from "../constants/personConstants";

export const personListReducer = (state = { persons: [] }, action) => {
  switch (action.type) {
    case PERSON_LIST_REQUEST:
      return { ...state, loading: true, persons: [] }

    case PERSON_LIST_SUCCESS:
      return { ...state, loading: false, persons: action.payload }

    case PERSON_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state;
  }
};

export const personDetailsReducer = (state = { person: [] }, action) => {
  switch (action.type) {
    case PERSON_DETAILS_REQUEST:
      return { ...state, loading: true };

    case PERSON_DETAILS_SUCCESS:
      return { ...state, loading: false, person: action.payload };

    case PERSON_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
