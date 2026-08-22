import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, lineHeight, space } from '@/styles/tokens';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.sm,
});

export const name = style({
  fontSize: fontSize.xl,
  lineHeight: lineHeight.tight,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

export const intro = style({
  color: color.textMuted,
});

export const links = style({
  display: 'flex',
  gap: space.md,
  marginTop: space.xs,
  listStyle: 'none',
  fontSize: fontSize.sm,
});

export const link = style({
  color: color.textMuted,
  // 전역 리셋이 a 의 밑줄을 지우므로 되살린다. 색만으로는 링크임이 드러나지 않는다.
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  selectors: {
    '&:hover': { color: color.text },
  },
});
