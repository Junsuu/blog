import { createGlobalTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';

/**
 * 색 6개 계약. 컴포넌트는 이 계약만 참조하고 실제 색값은 알지 못한다.
 * 나중에 강조색을 정할 때 이 파일의 값만 바꾸면 된다.
 */
export const color = createThemeContract({
  bg: null,
  text: null,
  textMuted: null,
  border: null,
  accent: null,
  accentBg: null,
});

/**
 * 라이트를 :root 에 바인딩하는 이유:
 * <head> 의 인라인 스크립트가 실패하거나 JS 가 꺼져 있으면 data-theme 속성이 아예 없다.
 * 테마를 [data-theme="light"] 에만 걸어두면 그때 CSS 변수가 하나도 안 잡혀서
 * 색 없는 페이지가 나온다. :root 가 그 경우의 안전망이다.
 */
createGlobalTheme(':root', color, {
  bg: '#ffffff',
  text: '#18181b',
  textMuted: '#71717a',
  border: '#e4e4e7',
  accent: '#000000',
  accentBg: '#f4f4f5',
});

/**
 * 다크는 반드시 라이트 뒤에 선언한다.
 * :root 와 [data-theme="dark"] 는 명시도가 (0,1,0) 으로 같아서 소스 순서로 승부가 난다.
 */
createGlobalTheme('[data-theme="dark"]', color, {
  bg: '#101012',
  text: '#e8e8ea',
  textMuted: '#9a9aa2',
  border: '#2a2a30',
  accent: '#ffffff',
  accentBg: '#1b1b20',
});

/** 스크롤바 · 폼 컨트롤 같은 네이티브 UI 도 테마를 따라오게 한다. */
globalStyle(':root', { colorScheme: 'light' });
globalStyle('[data-theme="dark"]', { colorScheme: 'dark' });
