import { getFeaturedEvents } from "@/helpers/getData";
import EventList from "@/components/events/EventList";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/NewsLetterRegistration";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="featured events" />
      </Head>
      <h1>Home Page</h1>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
