// FETCH USING CLIENT SIDE //
import { useRouter } from "next/router";
import useSWR from "swr";
import EventList from "@/components/events/EventList";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

export default function FilteredPage() {
  const router = useRouter();
  const queryText = router.query.slug;

  if (!queryText) {
    return <p>Loading ... </p>;
  }

  const [items, setItems] = useState();
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    "https://events-b924c-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === yearQuery &&
          eventDate.getMonth() === monthQuery
        );
      });

      setItems(filteredEvents);
    }
  }, [data]);

  const yearQuery = +queryText[0];
  const monthQuery = +queryText[1];
  let headerObject = (
    <Head>
      <title>{`filtered events`}</title>
      <meta
        name="description"
        content={`show all the events in the given events filter`}
      />
    </Head>
  );
  if (
    isNaN(yearQuery) ||
    isNaN(monthQuery) ||
    yearQuery > 2024 ||
    yearQuery < 2021 ||
    monthQuery >= 12 ||
    monthQuery < 0 ||
    error
  ) {
    return (
      <Fragment>
        {headerObject}
        <p>Invalid URL input</p>
      </Fragment>
    );
  }

  if (!items || items.length === 0) {
    return (
      <Fragment>
        {headerObject}
        <p>Event not found</p>
      </Fragment>
    );
  }

  headerObject = (
    <Head>
      <title>{`events in ${monthQuery + 1}/${yearQuery}`}</title>
      <meta
        name="description"
        content={`show all the events in ${monthQuery + 1}/${yearQuery}`}
      />
    </Head>
  );

  return (
    <Fragment>
      {headerObject}
      <EventList items={items} />
    </Fragment>
  );
}

// 2) FETCH USING SERVER SIDE //
// import { getFilteredEvents } from "@/helpers/getData";
// import EventList from "@/components/events/EventList";

// export default function FilteredPage(props) {
//   return <EventList items={props.events} />;
// }

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const queryText = params.slug;
//   const yearQuery = +queryText[0];
//   const monthQuery = +queryText[1];

//   if (
//     isNaN(yearQuery) ||
//     isNaN(monthQuery) ||
//     yearQuery > 2024 ||
//     yearQuery < 2021 ||
//     monthQuery >= 12 ||
//     monthQuery < 0
//   ) {
//     return { notFound: true };
//   }

//   const date = {
//     year: yearQuery,
//     month: monthQuery,
//   };

//   const items = await getFilteredEvents(date);

//   if (!items || items.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       events: items,
//     },
//   };
// }

// 3) WITHOUT FETCH DATA I.E. DUMMY DATA //
// import { getFilteredEvents } from "@/dummy-data";
// import { useRouter } from "next/router";
// import EventList from "@/components/events/EventList";

// export default function FilteredPage() {
//   const router = useRouter();
//   const queryText = router.query.slug;

//   if (!queryText) {
//     return <p>Loading ... </p>;
//   }

//   const yearQuery = +queryText[0];
//   const monthQuery = +queryText[1];
//   if (
//     isNaN(yearQuery) ||
//     isNaN(monthQuery) ||
//     yearQuery > 2024 ||
//     yearQuery < 2021 ||
//     monthQuery >= 12 ||
//     monthQuery < 0
//   ) {
//     return <p>Invalid URL input</p>;
//   }

//   const date = {
//     year: yearQuery,
//     month: monthQuery,
//   };
//   const items = getFilteredEvents(date);

//   if (!items) {
//     return <p>Event not found</p>;
//   }

//   return <EventList items={items} />;
// }
