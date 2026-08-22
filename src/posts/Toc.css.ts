import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, space } from '@/styles/tokens';

export const nav = style({
  padding: space.md,
  background: color.accentBg,
  border: `1px solid ${color.border}`,
  borderRadius: '4px',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.xs,
  listStyle: 'none',
  fontSize: fontSize.sm,
});

export const nested = style({
  paddingLeft: space.md,
});

export const link = style({
  color: color.textMuted,
  selectors: {
    '&:hover': {
      color: color.text,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  },
});
