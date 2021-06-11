import React from "react";

import "./Message.css";

const Message = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{props.title}</label>
      <textarea value={props.value} onChange={props.onChange}></textarea>
    </div>
  );
};

export default Message;
