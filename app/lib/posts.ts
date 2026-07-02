import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author: string;
  location: string;
  category: string;
  readTime: string;
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), "app/content/posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const fullPath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        description: data.description ?? "",
        image: data.image ?? "",
        author: data.author ?? "",
        location: data.location ?? "",
        category: data.category ?? "",
        readTime: data.readTime ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}