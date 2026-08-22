import Link from 'next/link';
import * as styles from './PostList.css';
import type { PostMeta } from '@/posts/model/types';

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className={styles.empty}>아직 쓴 글이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`} className={styles.item}>
            <h2 className={styles.title}>{post.title}</h2>
            {/* 날짜는 YYYY-MM-DD 그대로 보여준다. 로케일 포맷은 서버/클라이언트가
                다르게 렌더될 여지가 있고, 이 형식은 어디서나 뜻이 하나다. */}
            <time className={styles.date} dateTime={post.date}>
              {post.date}
            </time>
            <p className={styles.summary}>{post.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
