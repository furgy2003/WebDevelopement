import EventDetailHeader from "@/components/event_detail/EventDetailHeader";
import EventDetailContent from "@/components/event_detail/EventDetailContent";
import EventDetailDescription from "@/components/event_detail/EventDetailDescription";
import { getEventById, getFeaturedEvents } from "@/helpers/getData";
import Head from "next/head";
import Comments from "@/components/input/Comments";

export default function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return <p>Event is not found</p>;
  }

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventDetailHeader title={event.title} />
      <EventDetailContent
        image={event.image}
        description={event.description}
        location={event.location}
        date={event.date}
      />
      <EventDetailDescription>{event.description}</EventDetailDescription>
      <Comments eventId={event.id} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const pathObject = events.map((event) => {
    return { params: { eventId: event.id } };
  });
  return {
    paths: pathObject,
    fallback: "blocking",
  };
}
