import { GET_ERRORS, CLEAR_ERRORS, SHOWED_ERRORS } from "../actions/types";

const initialState = {
  msg: null,
  status: null,
  id: null,
  hasShown: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
        hasShown: action.payload.hasShown,
      };

    case CLEAR_ERRORS:
      return {
        msg: null,
        status: null,
        id: null,
        hasShown: false,
      };

    case SHOWED_ERRORS:
      return {
        ...state,
        hasShown: true,
      };
    default:
      return state;
  }
}
