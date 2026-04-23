import { getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Saif Adil`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let PostContent: React.ComponentType | null = null;
  let meta = null;

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    PostContent = mod.default;
    meta = mod.metadata ?? null;
  } catch {
    notFound();
  }

  const posts = getAllPosts();
  const postMeta = posts.find((p) => p.slug === slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-[var(--foreground)]"
        style={{ color: "var(--muted)" }}
      >
        <ArrowLeft size={15} />
        Back to blog
      </Link>

      <header className="mb-12">
        {postMeta && (
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm" style={{ color: "var(--muted)" }}>
              {new Date(postMeta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1 text-sm" style={{ color: "var(--muted)" }}>
              <Clock size={13} />
              {postMeta.readingTime}
            </span>
          </div>
        )}
        <h1
          className="text-4xl font-bold tracking-tight leading-tight mb-4"
          style={{ color: "var(--foreground)" }}
        >
          {postMeta?.title ?? slug}
        </h1>
        {postMeta?.excerpt && (
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {postMeta.excerpt}
          </p>
        )}
        {postMeta && postMeta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {postMeta.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-slate dark:prose-invert max-w-none
          prose-headings:font-semibold
          prose-a:text-[var(--accent)]
          prose-code:text-[var(--accent)]
          prose-pre:bg-[var(--card)]
          prose-pre:border prose-pre:border-[var(--border)]"
      >
        {PostContent && <PostContent />}
      </div>

      <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--foreground)]"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft size={15} />
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
