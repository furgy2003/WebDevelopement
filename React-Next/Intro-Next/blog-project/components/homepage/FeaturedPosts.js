import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPost.module.css";

export default function FeaturedPost(props) {
  const { posts } = props;
  return (
    <div className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </div>
  );
}
