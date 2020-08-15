import { GET_CATEGORIES } from "../actions/types";
import axios from "axios";
import { returnErrors } from "./errorActions";

export const getCategories = () => {
  return (dispatch) => {
    axios
      .get("/categories")
      .then((res) =>
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data.msg, err.response.status));
      });
  };
};
