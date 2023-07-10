import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectoryPath = path.join(process.cwd(), "posts");

export function getFileData(fileName) {
  const fileSlug = path.parse(fileName).name;
  const filePath = path.join(postDirectoryPath, fileSlug + ".md");
  const fileString = fs.readFileSync(filePath); // return string
  // use matter from npm gray-matter to read the markdown file
  const { data, content } = matter(fileString);

  const fileContent = {
    slug: fileSlug,
    ...data,
    content, // same as followed content: content
  };

  return fileContent;
}

export function getAllPosts() {
  // return array of file names
  const fileNames = fs.readdirSync(postDirectoryPath);
  const content = fileNames.map((fileName) => getFileData(fileName));
  const sortContent = content.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortContent;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featurePosts = allPosts.filter((post) => {
    return post.isFeatured;
  });

  return featurePosts;
}
