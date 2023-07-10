import MeetUpCard from "./MeetUpCard";

export default function MeetUpList({ list }) {
  return (
    <ul>
      {list.map((meetup) => (
        <MeetUpCard
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
