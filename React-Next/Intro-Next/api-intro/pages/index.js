import { Fragment, useRef, useState } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedbackItems, setFeedbackItems] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;
    const feedbackObject = {
      email: email,
      feedback: feedback,
    };

    // once the submitHandler func is called, it will call the handler func in api/feedback
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(feedbackObject),
      headers: {
        // to specify that the pass in format is in json so that next.js will automatically parse it for you
        "Content-Type": "application/json",
      },
    });
  }

  function loadFeedbackHandler() {
    // default fetch method is GET
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbackItems(data.feedbacks));
  }

  return (
    <Fragment>
      <h1>Home</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback: </label>
          <textarea row="5" id="feedback" ref={feedbackRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </Fragment>
  );
}
