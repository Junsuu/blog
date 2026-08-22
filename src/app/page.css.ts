import { style } from '@vanilla-extract/css';
import { color } from '@/styles/contract.css';
import { fontSize, space } from '@/styles/tokens';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
});

export const posts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.md,
  paddingTop: space.lg,
  // 소개와 목록을 가르는 유일한 장치. 배경색이나 여백을 더 쓰지 않는다.
  borderTop: `1px solid ${color.border}`,
});

/**
 * 목록의 섹션 이름. 시각적으로는 작은 라벨이지만 h2 다 —
 * 글자 크기와 헤딩 레벨은 별개이고, 여기서는 위계가 목록의 이름을 알려주는 역할을 한다.
 */
export const postsHeading = style({
  fontSize: fontSize.sm,
  fontWeight: 400,
  color: color.textMuted,
});
