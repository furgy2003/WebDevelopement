import { useState } from "react";
import { getFilePath, getFileData } from "../api/feedback";

export default function FeedbackPage(props) {
  const [showEmail, setShowEmail] = useState();

  // handling upon request
  function moreHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setShowEmail(data.email));
  }

  return (
    <ul>
      {showEmail && <p>{showEmail}</p>}
      {props.feedbackItems.map((item) => (
        <li key={item.id}>
          {item.feedback}
          {/* first parameter of bind is the this object, second is the first argument */}
          <button onClick={moreHandler.bind(null, item.id)}>View More</button>
        </li>
      ))}
    </ul>
  );
}

// pregenerate and get the information from api
export async function getStaticProps() {
  const filePath = getFilePath();
  const data = getFileData(filePath);

  // NOTE: for internal API, we never use fetch
  return {
    props: {
      feedbackItems: data,
    },
  };
}
