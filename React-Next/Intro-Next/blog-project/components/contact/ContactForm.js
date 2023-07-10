import { useContext, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";
import NotificationContext from "@/source/NotificationContext";

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const notificationCtx = useContext(NotificationContext);

  async function submitContactHandler(event) {
    event.preventDefault();
    const contactObj = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    notificationCtx.showNotification({
      title: "Pending...",
      message: "Submiting the response",
      status: "pending",
    });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactObj),
    });

    const data = response.json();
    try {
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      notificationCtx.showNotification({
        title: "Success",
        message: "Contact information is sent",
        status: "success",
      });
      setEnteredEmail("");
      setEnteredMessage("");
      setEnteredName("");
    } catch (error) {
      notificationCtx.showNotification({
        title: "Failed to submit",
        message: error.message || "Something went wrong",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitContactHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => {
                setEnteredEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event) => {
                setEnteredName(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => {
              setEnteredMessage(event.target.value);
            }}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationCtx.notification && (
        <Notification
          title={notificationCtx.notification.title}
          message={notificationCtx.notification.message}
          status={notificationCtx.notification.status}
        />
      )}
    </section>
  );
}
