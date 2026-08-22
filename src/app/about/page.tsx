import type { Metadata } from 'next';
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
        웹 프론트엔드를 만듭니다. 주로 React 와 TypeScript 로 일하고, 요즘은 서버 컴포넌트가
        기존의 습관들을 어떻게 바꾸는지에 관심이 많습니다.
      </p>

      <p>
        여기에는 일하면서 걸려 넘어진 것들을 씁니다. 잘 정리된 튜토리얼보다는, 문서에 없어서
        직접 확인해야 했던 것과 나중의 제가 다시 찾아볼 만한 것들에 가깝습니다. 결론이 없는
        글도 그대로 둡니다.
      </p>

      <p>
        고칠 곳이나 틀린 곳을 발견하셨다면 알려주세요. 새 글은 <a href="/rss.xml">RSS</a> 로
        받아보실 수 있습니다.
      </p>
    </div>
  );
}
