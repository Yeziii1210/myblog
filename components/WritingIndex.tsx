import { Reveal } from "@/components/Reveal";
import { getAllPosts } from "@/lib/writing";
import type { PostMeta } from "@/lib/writing";

function metaOf(post: PostMeta) {
  return [post.date, post.tag].filter(Boolean).join(" · ");
}

export function WritingIndex() {
  const posts = getAllPosts();

  return (
    <section className="writing-page" id="writing" aria-labelledby="writing-label">
      <Reveal immediate>
        <header className="contents-head">
          <span className="contents-kicker" id="writing-label">
            写作 / WRITING
          </span>
          <span className="contents-count">全 {posts.length} 篇</span>
        </header>
        <ol className="contents-list">
          {posts.map((post, i) => (
            <li key={post.slug} className="contents-item">
              <a href={`/writing/${post.slug}`} className="contents-link">
                <span className="contents-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="contents-body">
                  <span className="contents-title">{post.title}</span>
                  {post.excerpt && (
                    <span className="contents-excerpt">{post.excerpt}</span>
                  )}
                </span>
                <span className="contents-meta">{metaOf(post)}</span>
                <span className="contents-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
