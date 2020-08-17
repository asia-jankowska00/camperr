import axios from "axios";
import { GET_USER } from "./types";
import { returnErrors } from "./errorActions";
import { redirect } from "./routerActions";

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
