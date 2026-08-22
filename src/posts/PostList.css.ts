import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, lineHeight, space } from '@/styles/tokens';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
  listStyle: 'none',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.xs,
});

export const title = style({
  fontSize: fontSize.lg,
  lineHeight: lineHeight.tight,
  fontWeight: 600,
  selectors: {
    [`${item}:hover &`]: {
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  },
});

export const date = style({
  fontSize: fontSize.sm,
  color: color.textMuted,
  fontVariantNumeric: 'tabular-nums',
});

export const summary = style({
  color: color.textMuted,
});

export const empty = style({
  color: color.textMuted,
});
