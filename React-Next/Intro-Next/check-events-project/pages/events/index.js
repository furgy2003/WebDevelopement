import EventFilter from "@/components/events/EventFilter";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/helpers/getData";
import { useRouter } from "next/router";
import Head from "next/head";

export default function EventsPage(props) {
  const router = useRouter();

  function changeFilteredPage(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="show all events" />
      </Head>
      <h1>Event Page</h1>
      <EventFilter changeFilteredPage={changeFilteredPage} />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return { props: { events: events }, revalidate: 600 };
}
