import axios from "axios";
import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from "../actions/types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import { redirect } from "./routerActions";

export const addReview = (review, id) => {
  return (dispatch, getState) =>
    axios
      .post(`/campgrounds/${id}/reviews/`, review, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: ADD_REVIEW,
          payload: res.data,
        });
        console.log(res.data);
        dispatch(redirect(`/campgrounds/${id}/`));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
        if (err.response.status === 401) dispatch(redirect("/login"));
      });
};
