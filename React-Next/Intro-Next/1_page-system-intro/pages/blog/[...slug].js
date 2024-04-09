import { useRouter } from "next/router";

export default function SpecificBlogPost() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Specific Blog Post</h1>
    </div>
  );
}
