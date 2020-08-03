import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showedErrors } from "../actions/errorActions";

import Alert from "./Alert";

const Error = () => {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.msg && !error.hasShown) {
      dispatch(showedErrors());
    }
  }, [error]);

  return error && error.msg ? <Alert type="warning">{error.msg}</Alert> : null;
};

export default Error;
