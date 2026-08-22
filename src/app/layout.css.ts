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

/**
 * 전역 리셋이 a 의 밑줄을 지우는데, 푸터 링크는 주변 텍스트와 색까지 같아서
 * 밑줄이 없으면 링크임을 알 방법이 시각적으로 없다 (WCAG 1.4.1).
 */
export const footerLink = style({
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});
