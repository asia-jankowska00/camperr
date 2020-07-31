import { REDIRECT } from "../actions/types";

const initialState = {
  redirectTo: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return { redirectTo: action.payload };
    default:
      return state;
  }
}
