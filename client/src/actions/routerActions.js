import { REDIRECT, CLEAR_REDIRECT, SCROLL_TO_REVIEWS } from "../actions/types";

export const redirect = (url) => {
  return (dispatch) => {
    dispatch({
      type: REDIRECT,
      payload: url,
    });
  };
};

export const clearRedirect = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_REDIRECT,
    });
  };
};

export const scrollToReviews = () => {
  return (dispatch) => {
    dispatch({
      type: SCROLL_TO_REVIEWS,
    });
  };
};
