import { globalStyle, style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontFamilyMono, fontSize, lineHeight, space } from '@/styles/tokens';

/**
 * MDX 본문 스타일. 마크다운이 만들어내는 태그는 컴포넌트로 하나하나 감싸는 대신
 * 이 클래스 아래의 자손 선택자로 처리한다. 태그 종류가 열려 있어서
 * (글쓴이가 언제든 새 태그를 쓸 수 있어서) 목록으로 관리하는 게 맞지 않는다.
 */
export const prose = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.md,
});

globalStyle(`${prose} h2`, {
  marginTop: space.md,
  fontSize: fontSize.lg,
  lineHeight: lineHeight.tight,
  fontWeight: 600,
});

globalStyle(`${prose} h3`, {
  marginTop: space.sm,
  fontSize: fontSize.base,
  lineHeight: lineHeight.tight,
  fontWeight: 600,
});

globalStyle(`${prose} a`, {
  color: color.accent,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});

globalStyle(`${prose} ul, ${prose} ol`, {
  display: 'flex',
  flexDirection: 'column',
  gap: space.xs,
  paddingLeft: space.lg,
});

globalStyle(`${prose} li`, {
  // flex 컨테이너 안에서도 마커가 보이도록 되돌린다.
  display: 'list-item',
});

globalStyle(`${prose} blockquote`, {
  paddingLeft: space.md,
  borderLeft: `2px solid ${color.border}`,
  color: color.textMuted,
});

globalStyle(`${prose} code`, {
  fontFamily: fontFamilyMono,
  fontSize: fontSize.sm,
  background: color.accentBg,
  border: `1px solid ${color.border}`,
  borderRadius: '3px',
  padding: `0 ${space.xs}`,
});

globalStyle(`${prose} pre`, {
  padding: space.md,
  background: color.accentBg,
  border: `1px solid ${color.border}`,
  borderRadius: '4px',
  // 긴 코드가 720px 컬럼을 밀어내지 않게 스스로 스크롤한다.
  overflowX: 'auto',
});

// 코드 블록 안의 code 는 인라인 코드의 상자 장식을 물려받지 않아야 한다.
globalStyle(`${prose} pre code`, {
  background: 'none',
  border: 'none',
  padding: 0,
});

globalStyle(`${prose} hr`, {
  border: 'none',
  borderTop: `1px solid ${color.border}`,
});

globalStyle(`${prose} img`, {
  borderRadius: '4px',
});
