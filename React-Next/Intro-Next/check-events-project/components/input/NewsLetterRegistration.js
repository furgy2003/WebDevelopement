import { useRef, useContext } from "react";
import NotificationContext from "@/source/NotificationContext";
import classes from "./NewsLetterRegistration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  async function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API --> POST method
    if (!emailRef.current.value) return;
    const registerObject = { email: emailRef.current.value };

    notificationCtx.showNotification({
      title: "Registering",
      message: "Signing up for newsletter",
      status: "pending",
    });

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(registerObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      notificationCtx.showNotification({
        title: "Signed up",
        message: "Success in signing up",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Failed",
        message: error.message || "Something went wrong",
        status: "error",
      });
    }
    //   fetch("/api/register", {
    //     method: "POST",
    //     body: JSON.stringify(registerObject),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         return response.json().then((data) => {
    //           throw new Error(data.message || "Something went wrong");
    //         });
    //       }
    //     })
    //     .then((data) => {
    //       notificationCtx.showNotification({
    //         title: "Signed up",
    //         message: "Success in signing up",
    //         status: "success",
    //       });
    //     })
    //     .catch((error) => {
    //       notificationCtx.showNotification({
    //         title: "Failed",
    //         message: error.message || "Something went wrong",
    //         status: "error",
    //       });
    //     });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
