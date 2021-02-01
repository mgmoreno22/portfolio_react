import React from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import TelegramIcon from '@material-ui/icons/Telegram'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
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
    //Alert is temporary - confirmation that function has run successfully
    alert("Your email has been sent");
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" required />
      <Button startIcon={<TelegramIcon />} type="submit" value="Send" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}
