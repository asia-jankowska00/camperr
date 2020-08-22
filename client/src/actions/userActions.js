import axios from "axios";
import { GET_USER, UPDATE_USER } from "./types";
import { returnErrors } from "./errorActions";
import { redirect } from "./routerActions";
import { tokenConfig } from "./authActions";

export const getUser = (userId) => {
  return (dispatch) => {
    axios
      .get(`/users/user/${userId}`)
      .then((res) =>
        dispatch({
          type: GET_USER,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const updateAvatar = (userId, avatar) => {
  return (dispatch, getState) => {
    axios
      .put(`/users/user/${userId}/avatar`, avatar, tokenConfig(getState, true))
      .then((res) => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};

export const updateDescription = (userId, description) => {
  return (dispatch, getState) => {
    axios
      .put(
        `/users/user/${userId}/description`,
        description,
        tokenConfig(getState, false)
      )
      .then((res) => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};
