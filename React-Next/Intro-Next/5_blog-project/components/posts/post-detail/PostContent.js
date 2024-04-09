import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import Image from "next/image";
// to render markdown as html
import ReactMarkdown from "react-markdown";
// for styling code snippet
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const { content, title, image, slug } = props;
  const imagePath = `/images/posts/${slug}/${image}`;

  // below is specific to react-markdown
  const customRenderers = {
    // if encounter paragraph, then we will not use the default conversion setting,
    // instead we will override with our set of code
    p(paragraph) {
      const { node } = paragraph;

      // if there contains nested image inside the pargraph
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      // otherwise return the original paragraph
      return <p>{paragraph.children}</p>;
    },

    // if encounter code snippet then do the following
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        // react component provided by third-part package (react syntax highlighter)
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={image} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}
