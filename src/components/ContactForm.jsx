import React, { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((values) => ({ ...values, [name]: value }));
  };

  const isValidEmail = (mail) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  const validateInputs = (nameValue, emailValue, messageValue) => {
    if (nameValue === "") {
      setError((previousState) => {
        return { ...previousState, name: "Name is requered?" };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, name: "" };
      });
    }

    if (emailValue === "") {
      setError((previousState) => {
        return { ...previousState, email: "Email is required" };
      });
    } else if (!isValidEmail(emailValue)) {
      setError((previousState) => {
        return { ...previousState, email: "Provide a valid email address" };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, email: "" };
      });
    }
    if (messageValue === "") {
      setError((previousState) => {
        return { ...previousState, message: "Message is required" };
      });
    } else {
      setError((previousState) => {
        return { ...previousState, message: "" };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = contact.name.trim();
    const emailValue = contact.email.trim();
    const messageValue = contact.message.trim();
    if (
      !nameValue ||
      !emailValue ||
      !isValidEmail(emailValue) ||
      messageValue.length <= 20
    ) {
      validateInputs(nameValue, emailValue, messageValue);
    } else {
      setMessage("Thank you. Your information has been submitted.");
    }
  };
  return message ? (
    <div className="contact">
      <h3 className="contact__title">{message}</h3>
    </div>
  ) : (
    <form action="/" id="contact" className="contact" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Contact Us</legend>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Name
              <input
                type="text"
                name="name"
                value={contact.name || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {error.name ? (
            <div className="error">
              <p>Name is requered?</p>
            </div>
          ) : null}
        </div>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Email
              <input
                type="email"
                name="email"
                value={contact.email || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {error.email ? (
            <div className="error">
              <p>Email is requered?</p>
            </div>
          ) : null}
        </div>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Message
              <textarea
                type="text"
                name="message"
                value={contact.message || ""}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          {error.message ? (
            <div className="error">
              <p>Message is requered?</p>
            </div>
          ) : null}
        </div>
        <button type="submit">Submit Message</button>
      </fieldset>
    </form>
  );
};
export default ContactForm;
