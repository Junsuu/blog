import { site } from '@/site';
import * as styles from './SiteIntro.css';

/**
 * 홈 상단 소개. 이름이 h1 이고 그 아래 한 줄 소개와 외부 링크가 붙는다.
 * 글을 읽는 동안 매번 스크롤을 밀어내지 않도록 홈에만 둔다.
 */
export function SiteIntro() {
  return (
    <section className={styles.section}>
      <h1 className={styles.name}>{site.author}</h1>
      <p className={styles.intro}>{site.intro}</p>

      <ul className={styles.links}>
        <li>
          {/* 외부로 나가므로 새 탭. noreferrer 는 referrer 유출과 opener 접근을 함께 막는다. */}
          <a className={styles.link} href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className={styles.link} href={site.links.resume} target="_blank" rel="noreferrer">
            이력서
          </a>
        </li>
      </ul>
    </section>
  );
}
