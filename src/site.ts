/**
 * 사이트 상수. metadata · RSS · 헤더가 전부 여기를 참조한다.
 * 같은 문자열이 여러 파일에 흩어지면 한쪽만 고쳐지는 사고가 난다.
 */
export const site = {
  title: 'tinyhex',
  description: '웹 프론트엔드와 그 언저리에 대해 씁니다.',
  url: 'https://tinyhex.dev',
  author: 'js.park',
  locale: 'ko-KR',
} as const;
