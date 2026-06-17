import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/writing";
import { Chrome } from "@/components/Chrome";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — yeziii magazine`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const meta = [post.date, post.tag].filter(Boolean).join(" · ");

  return (
    <div className="site-shell" id="top">
      <div className="vignette" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <Chrome minimal />
      <main className="post-main">
        <article className="post-article">
          <header className="post-header">
            {post.kicker && <span className="post-kicker">{post.kicker}</span>}
            <h1 className="post-title">{post.title}</h1>
            {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
            <div className="post-eyebrow">
              <span className="post-meta">{meta}</span>
              {post.note && <span className="post-note">{post.note}</span>}
            </div>
          </header>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <nav className="post-nav" aria-label="Back navigation">
          <Link href="/#writing" className="post-back">
            ← 回到目录 / CONTENTS
          </Link>
        </nav>
      </main>
    </div>
  );
}
