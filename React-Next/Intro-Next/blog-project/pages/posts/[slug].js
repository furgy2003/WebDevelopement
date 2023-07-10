import PostContent from "@/components/posts/post-detail/PostContent";
import { Fragment } from "react";
import { getFileData } from "@/lib/post-util";
import Head from "next/head";

export default function DetailPost(props) {
  const { title, image, content, slug } = props;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <PostContent title={title} image={image} content={content} slug={slug} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const fileSlug = params.slug;
  const post = getFileData(fileSlug);

  return {
    props: {
      title: post.title,
      image: post.image,
      content: post.content,
      slug: fileSlug,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
