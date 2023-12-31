import classes from "./CommentList.module.css";

export default function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.comments?.map((comment) => (
        <li key={comment._id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
