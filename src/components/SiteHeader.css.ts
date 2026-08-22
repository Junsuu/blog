import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, space } from '@/styles/tokens';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: space.md,
});

export const title = style({
  fontSize: fontSize.lg,
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.md,
});

export const link = style({
  fontSize: fontSize.sm,
  color: color.textMuted,
  selectors: {
    '&:hover': { color: color.text },
  },
});
