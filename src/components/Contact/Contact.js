import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./index.css";
function Contact() {
  // manages form data
  const [formState, setFormState] = useState({
    name: " ",
    email: " ",
    message: " ",
  });
  // manages error messaging
  const [errorMessage, setErrorMessage] = useState("");

  // destructuring name, email and message from formState
  const { name, email, message } = formState;

  //   functions for handleChange and handleSubmit
  function handleChange(e) {
    // email  validation
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your Email address is invalid");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("errorMessage", errorMessage);
  }

  // prevent the default action of the form Submit button and then log the formState object on the Submit button click
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>THANKS FOR STOPPING BY</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            // default value is set to initial state as set by line 7 useState hook
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />{" "}
        </div>
        <div id="field">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            // default value is set to initial state as set by line 8 useState hook
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />{" "}
        </div>
        <div id="field">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            // default value is set to initial state as set by line 9 useState hook
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />{" "}
        </div>
        {/* BELOW CODE IS SAME AS:
        if(errorMessage) {
            <div>
             <p className="error-text">{errorMessage}</p>
             </div>
        }
     */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
