import { useEffect, useState, useContext } from "react";
import NotificationContext from "@/source/NotificationContext";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comment/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.filterData);
          setIsLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    // send data to API --> POST method
    notificationCtx.showNotification({
      title: "Pending",
      message: "Posting...",
      status: "pending",
    });

    const response = await fetch(`/api/comment/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    try {
      if (!response.ok) {
        throw new Error(data.message || "Something is wrong");
      }
      notificationCtx.showNotification({
        title: "Success",
        message: "Posted comment",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Failed",
        message: error.message || "Something is wrong",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
      {isLoading && <p>Loading ...</p>}
    </section>
  );
}

export default Comments;
