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

      <nav className={styles.nav}>
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
