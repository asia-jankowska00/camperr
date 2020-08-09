import { REDIRECT, CLEAR_REDIRECT, SCROLL_TO_REVIEWS } from "../actions/types";

const initialState = {
  redirectTo: null,
  scrollToReviews: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };

    case CLEAR_REDIRECT:
      return { redirectTo: null, scrollToReviews: false };

    case SCROLL_TO_REVIEWS:
      return {
        ...state,
        scrollToReviews: true,
      };

    default:
      return state;
  }
}
