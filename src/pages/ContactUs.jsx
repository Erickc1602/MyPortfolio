import emailjs from "emailjs-com";
import React, { useRef } from "react";

export function ContactUs() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f30r39h",
        "template_5tytcb5",
        form.current,
        "xemLVI-r2DBlWLiaa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name:</label>
      <input type="text" name="name" />
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
