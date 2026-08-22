import { globalStyle, style } from '@vanilla-extract/css';
import { visuallyHidden } from '@/styles/a11y.css';
import { color } from '@/styles/contract.css';
import { fontSize } from '@/styles/tokens';

export const button = style({
  // 아래 라벨이 absolute 라 기준점이 필요하다.
  position: 'relative',
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
 * 접근 가능한 이름도 아이콘과 똑같이 CSS 로 갈아끼운다.
 *
 * display:none 인 노드는 접근성 트리에서 빠지므로 이름 계산에도 포함되지 않는다.
 * 서버는 두 라벨을 항상 동일하게 렌더하고 어느 쪽이 남을지는 CSS 가 정하므로,
 * 하이드레이션 불일치가 원천적으로 없으면서 첫 페인트부터 이름이 정확하다.
 * aria-pressed 같은 상태 속성을 서버에서 정할 수 없어 포기했던 부분을 이걸로 되살린다.
 */
export const lightLabel = style([visuallyHidden]);
export const darkLabel = style([visuallyHidden, { display: 'none' }]);

// [data-theme="dark"] .class 는 명시도가 (0,2,0) 이라 위 (0,1,0) 규칙을 이긴다.
globalStyle(`[data-theme="dark"] .${lightIcon}`, { display: 'none' });
globalStyle(`[data-theme="dark"] .${darkIcon}`, { display: 'inline' });
globalStyle(`[data-theme="dark"] .${lightLabel}`, { display: 'none' });
globalStyle(`[data-theme="dark"] .${darkLabel}`, { display: 'block' });
