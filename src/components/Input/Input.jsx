import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p className="input-error">{props.error}</p>}
    </div>
  );
};

export default Input;
