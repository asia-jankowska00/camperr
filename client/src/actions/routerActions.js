import { REDIRECT } from "../actions/types";

export const redirect = (redirectToUrl) => {
  return (dispatch) => {
    dispatch({
      type: REDIRECT,
      payload: redirectToUrl,
    });
  };
};
