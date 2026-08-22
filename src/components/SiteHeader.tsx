import Link from 'next/link';
import { site } from '@/site';
import { ThemeToggle } from '@/theme/ThemeToggle';
import * as styles from './SiteHeader.css';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        {site.title}
      </Link>

      {/* 글 상세에는 nav 가 둘(헤더·목차)이라 이름이 없으면 랜드마크 목록에서 구분되지 않는다. */}
      <nav className={styles.nav} aria-label="주요">
        <Link href="/about" className={styles.link}>
          about
        </Link>
        {/* Next 라우트가 아니라 route handler 가 만드는 XML 이라 <a> 로 둔다. */}
        <a href="/rss.xml" className={styles.link}>
          rss
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
