/** localStorage 키. 인라인 스크립트와 토글 버튼이 같은 값을 봐야 한다. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * <head> 안에서 첫 페인트 전에 동기 실행되는 스크립트.
 *
 * 판정 순서: localStorage 의 명시적 선택 → 없으면 prefers-color-scheme.
 * 이 시점에 data-theme 이 정해지므로 잘못된 테마가 한 프레임도 보이지 않는다.
 *
 * 제약: 번들러를 거치지 않는 순수 JS 문자열이라 import 를 쓸 수 없다.
 * 키만 바깥 상수에서 주입해 매직 스트링이 두 군데로 갈라지는 걸 막는다.
 */
export const themeScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})()`;
