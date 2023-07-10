import { useRef } from "react";
import classes from "./NewMeetUpForm.module.css";
import Card from "../ui/Card";

export default function NewMeetUpForm(props) {
  // useRef is for reading data while useState is for tracking change
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const meetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.addMeetHandler(meetup);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleInput} required />
        </div>
        <div className={classes.input}>
          <label htmlFor="image">Image URL</label>
          <input id="image" type="url" ref={imageInput} required />
        </div>
        <div className={classes.input}>
          <label htmlFor="address">Address</label>
          <input id="address" type="text" ref={addressInput} required />
        </div>
        <div className={classes.input}>
          <label htmlFor="description">Title</label>
          <textarea id="description" rows="5" ref={descriptionInput} required />
        </div>
        <div className={classes.submit}>
          <button className={classes.btn}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
