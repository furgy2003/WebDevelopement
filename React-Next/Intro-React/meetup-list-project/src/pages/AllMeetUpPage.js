import { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

export default function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  // execute the function in the first parameter when dependencies in the second paramter
  // change, if no dependencies then execuete function once after rendering
  useEffect(() => {
    fetch("https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading)
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList list={meetups} />
    </section>
  );
}
