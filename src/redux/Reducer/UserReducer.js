import { AUTHENTICATED, IS_FETCHING, DONE_FETCHING } from "../Actions/ActionTypes";

const initialState = {
  isFetching: false,
  authenticated: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case DONE_FETCHING:
      return { ...state, isFetching: false };
    case AUTHENTICATED:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}