import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, lineHeight, space } from '@/styles/tokens';

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.sm,
});

export const title = style({
  fontSize: fontSize.xl,
  lineHeight: lineHeight.tight,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

export const date = style({
  fontSize: fontSize.sm,
  color: color.textMuted,
  fontVariantNumeric: 'tabular-nums',
});

export const draftBadge = style({
  alignSelf: 'flex-start',
  padding: `0 ${space.sm}`,
  fontSize: fontSize.sm,
  color: color.textMuted,
  border: `1px solid ${color.border}`,
  borderRadius: '4px',
});
