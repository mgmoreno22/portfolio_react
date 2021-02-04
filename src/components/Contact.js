import React from "react";
import emailjs from "emailjs-com";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TelegramIcon from '@material-ui/icons/Telegram';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
    <FormControl className="contact-form" onSubmit={sendEmail}>
      <InputLabel htmlFor="user_name" >Name</InputLabel >
      <Input type="text" id="user_name" name="user_name" required />
      <InputLabel htmlFor="user_email">Email</InputLabel >
      <Input type="email" name="user_email" id="user_email" required />
      <InputLabel htmlFor="subject">Subject</InputLabel >
      <Input type="text" id="subject" name="subject" />
      <InputLabel htmlFor="message">Message</InputLabel >
      <TextareaAutosize name="message" required />
      <Button startIcon={<TelegramIcon />} type="submit" value="Send" variant="contained" color="primary">
        Send
      </Button>
    </FormControl>
  );
}
