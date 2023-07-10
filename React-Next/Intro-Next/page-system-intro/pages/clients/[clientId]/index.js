import { useRouter } from "next/router";

export default function SpecificClientPage() {
  const router = useRouter();
  console.log(router.query.clientId);

  return (
    <div>
      <h1>Specific Client Page</h1>
    </div>
  );
}
