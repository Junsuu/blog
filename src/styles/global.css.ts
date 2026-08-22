import { globalStyle } from '@vanilla-extract/css';
import { color } from './contract.css';
import { fontFamily, fontSize, lineHeight, space } from './tokens';

// contract.css 를 import 하므로 테마 변수 선언이 이 파일의 규칙보다 앞에 온다.

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  // 목차 앵커로 점프했을 때 제목이 뷰포트 맨 위에 붙어버리지 않게 한다.
  scrollPaddingTop: space.lg,
});

globalStyle('body', {
  background: color.bg,
  color: color.text,
  fontFamily,
  fontSize: fontSize.base,
  lineHeight: lineHeight.normal,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('img, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('button', {
  font: 'inherit',
  color: 'inherit',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

// 키보드 사용자를 위한 포커스 링. 마우스 클릭에는 나타나지 않는다.
globalStyle(':focus-visible', {
  outline: `2px solid ${color.accent}`,
  outlineOffset: '2px',
});
