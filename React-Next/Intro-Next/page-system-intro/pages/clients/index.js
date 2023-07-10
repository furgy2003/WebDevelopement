import Link from "next/link";
import { useRouter } from "next/router";

export default function ClientsPage() {
  const router = useRouter();
  const clients = [
    { id: "max", name: "Max" },
    { id: "min", name: "Min" },
  ];

  function LoadProjectHandler() {
    // use to navigate the path
    router.push({
      pathname: "/clients/[id]/[projectID]",
      query: { id: "max", projectID: "123" },
    });
  }

  return (
    <div>
      <h1>Clients Page</h1>
      {clients.map((client) => (
        <li key={client.id}>
          {/* <Link href={`clients/${client.id}`}>{client.name}</Link> */}
          <Link href={{ pathname: "/clients/[id]", query: { id: client.id } }}>
            {client.name}
          </Link>
        </li>
      ))}
      <button onClick={LoadProjectHandler}>Load Project A</button>
    </div>
  );
}
