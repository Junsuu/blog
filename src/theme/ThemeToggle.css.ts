import { globalStyle, style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize } from '@/styles/tokens';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '4px',
  fontSize: fontSize.sm,
  color: color.textMuted,
  selectors: {
    '&:hover': {
      color: color.text,
      background: color.accentBg,
    },
  },
});

export const lightIcon = style({});

// 기본(라이트)에서는 달을 숨긴다.
export const darkIcon = style({ display: 'none' });

/**
 * 아이콘 전환을 state 가 아니라 CSS 로 하는 이유는 ThemeToggle.tsx 주석 참고.
 * [data-theme="dark"] .class 는 명시도가 (0,2,0) 이라 위 (0,1,0) 규칙을 이긴다.
 */
globalStyle(`[data-theme="dark"] .${lightIcon}`, { display: 'none' });
globalStyle(`[data-theme="dark"] .${darkIcon}`, { display: 'inline' });
