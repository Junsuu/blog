import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/posts/MdxComponents';
import { getAllSlugs, getPostBySlug } from '@/posts/posts';
import { prose } from '@/posts/prose.css';
import { extractToc } from '@/posts/tableOfContents';
import { Toc } from '@/posts/Toc';
import * as styles from './page.css';

// Next 15+ 에서 params 는 Promise 다.
type PostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/posts/${post.slug}` },
    // draft 는 URL 로 열리기는 하지만 검색엔진에는 올라가지 않아야 한다.
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        {post.draft && <span className={styles.draftBadge}>draft</span>}
        <h1 className={styles.title}>{post.title}</h1>
        <time className={styles.date} dateTime={post.date}>
          {post.date}
        </time>
      </header>

      <Toc entries={extractToc(post.content)} />

      <div className={prose}>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
