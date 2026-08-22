import type { Metadata } from 'next';
import { site } from '@/site';
import * as styles from './page.css';

export const metadata: Metadata = {
  title: 'about',
  description: '이 블로그와 쓰는 사람에 대해.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>about</h1>

      <p>
        프론트엔드 개발자 박준수입니다. 2020년부터 6년째 웹을 만들고 있고, 지금은
        패스트파이브에서 웹·앱·어드민을 가리지 않고 프론트엔드 전반을 맡고 있습니다. 그전에는
        스마트스코어와 티아이스퀘어에 있었습니다.
      </p>

      <p>
        반복되는 병목을 구조와 도구로 푸는 일에 관심이 많습니다. 이벤트 페이지마다 개발이 붙어야
        하던 흐름을 노코드 빌더로 바꿔 마케터가 직접 이벤트를 만들 수 있게 했고, 엑셀로 관리되던
        공간 현황을 도면 위에 그리는 에디터로 옮겼습니다. 느린 빌드가 팀 전체의 속도를 갉아먹는다고
        판단해 번들러 전환을 제안하고 개선 폭을 실측해 근거로 만든 적도 있습니다. 사내 어드민을
        쓰는 사람도 똑같은 사용자라고 생각합니다.
      </p>

      <p>
        여기에는 그 과정에서 걸려 넘어진 것들을 씁니다. 잘 정리된 튜토리얼보다는, 문서에 없어서
        직접 확인해야 했던 것과 나중의 제가 다시 찾아볼 만한 것들에 가깝습니다. 결론이 없는 글도
        그대로 둡니다.
      </p>

      <p>
        더 자세한 이력은{' '}
        <a href={site.links.resume} target="_blank" rel="noreferrer">
          이력서
        </a>
        에, 코드는{' '}
        <a href={site.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        에 있습니다. 새 글은 <a href="/rss.xml">RSS</a> 로 받아보실 수 있습니다.
      </p>
    </div>
  );
}
