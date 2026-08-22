/**
 * 사이트 상수. metadata · RSS · 헤더 · 소개 영역이 전부 여기를 참조한다.
 * 같은 문자열이 여러 파일에 흩어지면 한쪽만 고쳐지는 사고가 난다.
 */
export const site = {
  title: 'tinyhex',
  description: '웹 프론트엔드와 그 언저리에 대해 씁니다.',
  url: 'https://tinyhex.dev',
  author: '박준수',
  locale: 'ko-KR',

  /** 홈 상단 한 줄 소개. 제목(이름) 아래에 붙는다. */
  intro: '반복되는 병목을 구조와 도구로 풀어내는 프론트엔드 개발자입니다.',

  links: {
    github: 'https://github.com/Junsuu',
    resume:
      'https://dour-caravel-8ef.notion.site/Frontend-Engineer-2e6bac14946a80e0adfee53795219a20',
  },
} as const;
