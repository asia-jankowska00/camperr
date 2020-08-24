import axios from "axios";
import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from "../actions/types";
import { getCampground } from "./campgroundActions";
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
        dispatch(getCampground(id));
        // dispatch(redirect(`/campgrounds/${id}/`));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
        if (err.response.status === 401) dispatch(redirect("/login"));
      });
};

export const deleteReview = (campgroundId, reviewId) => {
  return (dispatch, getState) =>
    axios
      .delete(
        `/campgrounds/${campgroundId}/reviews/${reviewId}`,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({
          type: DELETE_REVIEW,
          payload: reviewId,
        });
        dispatch(getCampground(campgroundId));
        // dispatch(redirect(`/campgrounds/${campgroundId}`));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
};

export const updateReview = (campgroundId, reviewId, newReview) => {
  return (dispatch, getState) =>
    axios
      .put(
        `/campgrounds/${campgroundId}/reviews/${reviewId}`,
        newReview,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({
          type: UPDATE_REVIEW,
          payload: res.data,
        });

        dispatch(getCampground(campgroundId));
        dispatch(getCampground(campgroundId));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
};
