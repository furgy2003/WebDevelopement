import Hero from "@/components/homepage/Hero";
import FeaturedPost from "@/components/homepage/FeaturedPosts";
import { Fragment } from "react";
import Head from "next/head";
import { getFeaturedPosts } from "@/lib/post-util";

export default function HomePage(props) {
  const { featurePosts } = props;
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Home page containing the featured posts"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={featurePosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featurePosts = getFeaturedPosts();
  return { props: { featurePosts: featurePosts } };
}
