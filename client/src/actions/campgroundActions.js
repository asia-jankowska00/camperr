import axios from "axios";
import {
  GET_CAMPGROUNDS,
  GET_CAMPGROUND,
  GET_COTD,
  DELETE_CAMPGROUND,
  ADD_CAMPGROUND,
  UPDATE_CAMPGROUND,
  CAMPGROUNDS_LOADING,
} from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import { redirect } from "./routerActions";

export const getCampgrounds = () => {
  return (dispatch) => {
    dispatch(setCampgroundsLoading());
    axios
      .get("/campgrounds")
      .then((res) =>
        dispatch({
          type: GET_CAMPGROUNDS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const getCampground = (id) => {
  return (dispatch) => {
    dispatch(setCampgroundsLoading());
    axios
      .get(`/campgrounds/${id}`)
      .then((res) => {
        dispatch({
          type: GET_CAMPGROUND,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const getCampgroundOfTheDay = () => {
  return (dispatch) => {
    dispatch(setCampgroundsLoading());
    axios
      .get(`/campgrounds/cotd`)
      .then((res) => {
        dispatch({
          type: GET_COTD,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const deleteCampground = (id) => {
  return (dispatch, getState) =>
    axios
      .delete(`/campgrounds/${id}`, tokenConfig(getState, false))
      .then((res) => {
        dispatch({
          type: DELETE_CAMPGROUND,
          payload: id,
        });
        dispatch(redirect("/campgrounds"));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
};

export const addCampground = (campground) => {
  return (dispatch, getState) =>
    axios
      .post("/campgrounds", campground, tokenConfig(getState, true))
      .then((res) => {
        dispatch({
          type: ADD_CAMPGROUND,
          payload: res.data,
        });
        dispatch(redirect("/campgrounds"));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
        if (err.response.status === 401) dispatch(redirect("/login"));
      });
};

export const updateCampground = (id, campground) => {
  return (dispatch, getState) => {
    dispatch(setCampgroundsLoading());
    axios
      .put(`/campgrounds/${id}`, campground, tokenConfig(getState, true))
      .then((res) => {
        dispatch({
          type: UPDATE_CAMPGROUND,
          payload: res.data,
        });
        dispatch(redirect(`/campgrounds/${id}`));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const setCampgroundsLoading = () => {
  return {
    type: CAMPGROUNDS_LOADING,
  };
};
