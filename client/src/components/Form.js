import React from "react";

const Form = (props) => {
  return (
    <form enctype={props.enctype} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
