import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Blog — Saif Adil",
  description: "Writing on AI, cloud, enterprise storage, virtualization, and infrastructure.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          Writing
        </p>
        <h1
          className="text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Blog
        </h1>
        <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
          Technical writing on AI implementation, enterprise storage, cloud strategy,
          virtualization, and lessons from 22+ years in the field.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          className="text-center py-24 border rounded-2xl"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-2xl mb-2">✍️</p>
          <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
            Posts coming soon
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            First articles in progress — covering GPU-free RAG on IBM Fusion, AI
            infrastructure patterns, and more.
          </p>
        </div>
      ) : (
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {posts.map((post) => (
            <article key={post.slug} className="py-8 group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-xs" style={{ color: "var(--muted)" }}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                        <Clock size={11} />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2
                      className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors"
                      style={{ color: "var(--foreground)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                      {post.excerpt}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border"
                            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                          >
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                    style={{ color: "var(--muted)" }}
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
