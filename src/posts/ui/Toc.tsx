import * as styles from './Toc.css';
import type { TocEntry } from '@/posts/model/toc';

export function Toc({ entries }: { entries: TocEntry[] }) {
  // 헤딩이 없는 짧은 글에는 빈 상자를 남기지 않는다.
  if (entries.length === 0) return null;

  return (
    <nav className={styles.nav} aria-label="목차">
      <ul className={styles.list}>
        {entries.map((entry, index) => (
          // 제목이 겹치면 slug 도 겹치므로 index 를 섞어 key 를 유일하게 만든다.
          <li key={`${entry.slug}-${index}`} className={entry.depth === 3 ? styles.nested : undefined}>
            <a href={`#${entry.slug}`} className={styles.link}>
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
