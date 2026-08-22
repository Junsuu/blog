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
        프론트엔드 개발자 박준수입니다. 비즈니스 맥락을 읽고 모호함을 솔루션으로 바꾸는 일,
        반복되는 병목을 구조와 도구로 풀어내는 일을 합니다.
      </p>

      <p>
        화면부터 그리기 전에 도메인을 먼저 이해하려고 합니다. PO·디자인·데이터·운영·사업 등 여러
        이해관계자와 같은 언어로 문제를 정리하는 데 시간을 쓰는 편이고, 팀이 더 빠르고 정확하게 일할
        수 있는 방식을 만드는 일을 좋아합니다. 화면 뒤에서 도구를 쓰는 사람도 똑같은 사용자라고
        생각합니다. 문제를 발견하면 먼저 제안하고 끝까지 가보는 쪽이며, 해본 적 없는 문제일수록
        재미있어 합니다.
      </p>

      <p>
        이 블로그에는 일하면서 걸려 넘어진 것들을 씁니다. 잘 정리된 튜토리얼이라기보다, 문서에
        없어서 직접 확인해야 했던 것이자 나중의 제가 다시 찾아볼 기록에 가깝습니다. 깔끔하게
        정리된 뒤에 쓰려고 하면 대개 안 쓰게 되더군요. 그래서 결론이 없어도 일단 남깁니다.
      </p>

      <p>
        어디서 무엇을 했는지는{' '}
        <a href={site.links.resume} target="_blank" rel="noreferrer">
          이력서
        </a>
        에 정리해 두었습니다. 코드는{' '}
        <a href={site.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        에 있습니다. 새 글은 <a href="/rss.xml">RSS</a> 로 받아보실 수 있습니다.
      </p>
    </div>
  );
}
