import { style } from '@vanilla-extract/css';

/**
 * 화면에서는 감추되 접근성 트리에는 남긴다.
 *
 * display:none 이나 visibility:hidden 은 접근성 트리에서도 빠지므로 여기서는 쓸 수 없다.
 * 스크린리더에만 전달할 텍스트가 필요할 때 쓴다.
 */
export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  padding: 0,
  overflow: 'hidden',
  clipPath: 'inset(50%)',
  whiteSpace: 'nowrap',
  border: 0,
});
