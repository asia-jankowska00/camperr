import axios from "axios";
import {
  GET_CAMPGROUNDS,
  DELETE_CAMPGROUND,
  ADD_CAMPGROUND,
  CAMPGROUNDS_LOADING,
} from "./types";

export const getCampgrounds = () => {
  return (dispatch) => {
    dispatch(setCampgroundsLoading);
    axios.get("http://localhost:5000/campgrounds").then((res) =>
      dispatch({
        type: GET_CAMPGROUNDS,
        payload: res.data,
      })
    );
  };
};

export const deleteCampground = (id) => {
  return {
    type: DELETE_CAMPGROUND,
    payload: id,
  };
};

export const addCampground = (campground) => {
  return {
    type: ADD_CAMPGROUND,
    payload: campground,
  };
};

export const setCampgroundsLoading = () => {
  return {
    type: CAMPGROUNDS_LOADING,
  };
};
