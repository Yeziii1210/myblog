import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content/writing");

export type PostMeta = {
  slug: string;
  date: string;
  title: string;
  excerpt?: string;
  tag?: string;
  kicker?: string;
  note?: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(
        fs.readFileSync(path.join(contentDir, f), "utf8"),
      );
      return {
        slug,
        date: data.date as string,
        title: data.title as string,
        excerpt: data.excerpt as string | undefined,
        tag: data.tag as string | undefined,
        kicker: data.kicker as string | undefined,
        note: data.note as string | undefined,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const processed = await remark().use(html).process(content);

  return {
    slug,
    date: data.date as string,
    title: data.title as string,
    excerpt: data.excerpt as string | undefined,
    tag: data.tag as string | undefined,
    kicker: data.kicker as string | undefined,
    note: data.note as string | undefined,
    content: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
