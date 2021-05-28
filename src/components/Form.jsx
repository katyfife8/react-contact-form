import React, { useState } from "react";

import "./Form.css";

import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <form onSubmit={() => alert("Thank you for signing up")}>
        <div className="input-fields">
          <div className="form-input">
            <Label for="first-name" name="first name"></Label>
            <Input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <Label for="last-name" name="last name"></Label>
            <Input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <Label for="email" name="email"></Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-input">
            <Label for="password" name="password"></Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" name="SUBMIT" />
        </div>
      </form>
    </div>
  );
}

export default Form;
