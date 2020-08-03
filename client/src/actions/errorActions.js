import { GET_ERRORS, CLEAR_ERRORS, SHOWED_ERRORS } from "./types";

export const returnErrors = (msg, status, id = null, hasShown = false) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id, hasShown },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const showedErrors = () => {
  return {
    type: SHOWED_ERRORS,
  };
};
