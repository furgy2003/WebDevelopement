import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";

export default function NewMeetUpPage() {
  const history = useHistory();

  function addMeetHandler(meetup) {
    // useHistory for navigating to pages
    fetch("https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetup),
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm addMeetHandler={addMeetHandler} />
    </section>
  );
}
