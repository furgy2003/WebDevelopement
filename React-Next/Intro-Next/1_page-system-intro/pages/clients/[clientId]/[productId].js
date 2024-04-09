import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Product Page </h1>
    </div>
  );
}
