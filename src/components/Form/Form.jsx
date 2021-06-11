import React, { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import Message from "../Message/Message";
import Button from "../Button/Button";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (firstNameError || lastNameError || emailError || passwordError) {
      alert("Thank you for getting in touch!");
    } else {
      alert("Please complete all fields.");
    }
  };

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    if (newFirstName.length === 0) {
      setFirstNameError("First name field cannot be blank.");
    }
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    if (newLastName.length === 0) {
      setLastNameError("Last name field cannot be blank.");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.length === 0) {
      setEmailError("Email field cannot be blank.");
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        newEmail
      )
    ) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length === 0) {
      setPasswordError("Password field cannot be blank.");
    } else if (newPassword.length < 8) {
      setPasswordError("Password must contain a minimum of 8 characters.");
    } else if (!/\d/.test(newPassword)) {
      setPasswordError("Password must contain at least 1 number.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="input-fields">
          <Input
            type="text"
            required
            title="First name"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
            error={firstNameError}
          />

          <Input
            type="text"
            required
            title="Last name"
            id="first-name"
            value={lastName}
            onChange={handleLastNameChange}
            error={lastNameError}
          />
          <Input
            type="email"
            required
            title="Email"
            id="email"
            placeholder="email@address.com"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />

          <Input
            type="password"
            required
            title="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />

          <div className="input-field">
            <label>What can we help you with?</label>
            <div className="dropdown-field">
              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
              >
                <option value="ceramics">Ceramics</option>
                <option value="photography">Photography</option>
                <option value="order">An order</option>
                <option value="press">Press</option>
              </select>
            </div>
          </div>

          <Message
            title="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Input type="checkbox" title="Sign up for emails" id="subscribe" />
        </div>
        <Button type="submit" name="SUBMIT" />
      </form>
    </div>
  );
}

export default Form;
