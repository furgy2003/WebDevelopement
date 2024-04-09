// CLIENT SIDE DATA FETCH // (no prerendering/ pregenerating)

import { Fragment, useEffect, useState } from "react";

// WITH SWR //
import useSWR from "swr";

export default function MeetUp() {
  // useSWR is a custom hook created by Next.js used for fetching client side data
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(
    "https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json",
    fetcher
  );

  const [meetup, setMeetup] = useState();

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

// WITHOUT SWR //
// export default function MeetUp() {
//   const [meetup, setMeetup] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true);
//     fetch("https://meetup-list-39a8e-default-rtdb.firebaseio.com/meetup.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeetup(false);
//         const loadedData = [];
//         for (let key in data) {
//           const dataObject = {
//             id: key,
//             title: data[key].title,
//             description: data[key].description,
//           };
//           loadedData.push(dataObject);
//         }
//         setIsLoading(false);
//         setMeetup(loadedData);
//       });
//   }, []);

//   if (isLoading) {
//     return <p>Loading ...</p>;
//   }

//   if (!meetup) {
//     return <p>No Data</p>;
//   }

//   return (
//     <ul>
//       {meetup.map((item) => (
//         <li id={item.id}>
//           {item.title} - {item.description}
//         </li>
//       ))}
//     </ul>
//   );
// }
