import PostGrid from "@/components/posts/PostGrid";
import { Fragment } from "react";
import Head from "next/head";
import { getAllPosts } from "@/lib/post-util";

export default function AllPost(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="all posts about programming" />
      </Head>
      <PostGrid posts={posts} />
    </Fragment>
  );
}

// need getStaticProps because fs and path are Node.js func therefore can only be run on
// the server side
export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts: posts } };
}
