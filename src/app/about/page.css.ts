import { globalStyle, style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, lineHeight, space } from '@/styles/tokens';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.md,
});

export const heading = style({
  fontSize: fontSize.xl,
  lineHeight: lineHeight.tight,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

globalStyle(`${page} a`, {
  color: color.accent,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});
