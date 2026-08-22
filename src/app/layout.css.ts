import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { contentWidth, fontSize, mobileQuery, space } from '@/styles/tokens';

export const shell = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
  minHeight: '100dvh',
  maxWidth: contentWidth,
  margin: '0 auto',
  padding: space.lg,
  '@media': {
    [mobileQuery]: {
      padding: space.md,
    },
  },
});

export const main = style({
  flex: 1,
});

export const footer = style({
  paddingTop: space.md,
  borderTop: `1px solid ${color.border}`,
  fontSize: fontSize.sm,
  color: color.textMuted,
});
