/**
 * 테마와 무관한 상수. 라이트/다크에서 값이 바뀌지 않으므로 CSS 변수로 만들지 않고
 * 빌드 타임에 그대로 박아 넣는다. 테마에 따라 변하는 값은 contract.css.ts 에 있다.
 */

/** 간격 4단계. 이 4개 바깥의 값은 쓰지 않는다. */
export const space = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
} as const;

/** 타이포 4단계. */
export const fontSize = {
  sm: '14px',
  base: '16px',
  lg: '20px',
  xl: '32px',
} as const;

export const lineHeight = {
  tight: '1.3',
  normal: '1.7',
} as const;

/**
 * 웹폰트는 Pretendard 하나뿐이다. 뒤는 웹폰트가 오기 전/실패했을 때의 시스템 폴백.
 * 코드용 mono 는 웹폰트를 받지 않고 OS 기본 글꼴만 쓴다.
 */
export const fontFamily =
  '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Apple SD Gothic Neo", sans-serif';

export const fontFamilyMono =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

/** 단일 컬럼 최대 폭. */
export const contentWidth = '720px';

/** 브레이크포인트 1개. */
export const mobileQuery = 'screen and (max-width: 768px)';
