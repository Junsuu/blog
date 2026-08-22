import { SiteIntro } from '@/components/SiteIntro';
import { getPublishedPosts } from '@/posts/model/posts';
import { PostList } from '@/posts/ui/PostList';
import * as styles from './page.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* 이름이 이 페이지의 h1 이다. 시각적으로 숨긴 h1 은 더 이상 필요 없다. */}
      <SiteIntro />

      <section className={styles.posts}>
        <h2 className={styles.postsHeading}>글</h2>
        <PostList posts={getPublishedPosts()} />
      </section>
    </div>
  );
}
