'use client';

import * as styles from './ThemeToggle.css';
import { THEME_STORAGE_KEY } from './themeScript';

/**
 * 사이트에서 유일한 클라이언트 컴포넌트. 나머지 페이지는 전부 서버 컴포넌트다.
 *
 * 아이콘을 useState 로 그리지 않는 이유:
 * 서버는 방문자의 테마를 알 수 없으므로 어떤 값으로 렌더해도 절반은 틀린다.
 * 그러면 하이드레이션 불일치가 나거나, 마운트 후 아이콘이 바뀌며 깜빡인다.
 * 아이콘 전환은 CSS 가 [data-theme] 를 보고 처리하고(ThemeToggle.css.ts),
 * 이 컴포넌트는 클릭 핸들러만 맡는다. 그래서 첫 페인트부터 아이콘이 정확하다.
 *
 * 접근 가능한 이름도 같은 방식이다. aria-label 을 고정 문자열로 두면 스크린리더
 * 사용자가 현재 테마를 알 수 없어서, 라벨 두 개를 넣고 CSS 로 하나만 남긴다.
 * aria-label 은 붙이지 않는다 — 붙이면 콘텐츠 기반 이름을 덮어써 버린다.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';

    root.dataset.theme = next;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // 사파리 프라이빗 모드 등에서 쓰기가 막힐 수 있다.
      // 저장은 실패해도 이번 세션의 전환 자체는 되게 둔다.
    }
  };

  return (
    <button type="button" onClick={toggle} className={styles.button}>
      <span className={styles.lightIcon} aria-hidden="true">
        ☀
      </span>
      <span className={styles.darkIcon} aria-hidden="true">
        ☾
      </span>
      <span className={styles.lightLabel}>현재 라이트 테마 · 다크 테마로 전환</span>
      <span className={styles.darkLabel}>현재 다크 테마 · 라이트 테마로 전환</span>
    </button>
  );
}
