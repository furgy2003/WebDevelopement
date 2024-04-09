import classes from "./PostGrid.module.css";
import PostItem from "./PostItem";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <div className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
