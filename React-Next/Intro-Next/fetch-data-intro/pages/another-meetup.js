// CLIENT AND SERVER SIDE DATA FETCH //

import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

// update according to client-side
export default function MeetUp(props) {
  // useSWR is a custom hook created by Next.js used for fetching client side data
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(
    "https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json",
    fetcher
  );

  const [meetup, setMeetup] = useState(props.data);

  // useEffect only required because we need to modify the data we fetch
  useEffect(() => {
    if (data) {
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      setMeetup(loadedData);
    }
  }, [data]);

  if (error) {
    return <p>Failed to Load</p>;
  }

  if (!meetup || !data) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {meetup.map((item) => (
        <li id={item.id}>
          {item.title} - {item.description}
        </li>
      ))}
    </ul>
  );
}

// Note getStaticProps is a Next.js func and not React, therefore cannot use Hook
// pregenerate in server side
export async function getStaticProps() {
  const response = await fetch(
    "https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json"
  );

  const data = await response.json();

  const loadedData = [];
  for (let key in data) {
    const dataObject = {
      id: key,
      title: data[key].title,
      description: data[key].description,
    };
    loadedData.push(dataObject);
  }

  return {
    props: {
      data: loadedData,
    },
  };
}
