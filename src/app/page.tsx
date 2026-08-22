import { getPublishedPosts } from '@/posts/model/posts';
import { PostList } from '@/posts/ui/PostList';
import { visuallyHidden } from '@/styles/a11y.css';

export default function HomePage() {
  return (
    <>
      {/*
        목록의 글 제목이 h2 라서 h1 이 없으면 첫 화면에 페이지 주제가 없다.
        헤더의 사이트 제목은 Link 일 뿐 헤딩이 아니라 대체가 되지 않는다.
        무채색·무장식 디자인을 건드리지 않으려고 시각적으로는 감춘다.
      */}
      <h1 className={visuallyHidden}>글 목록</h1>
      <PostList posts={getPublishedPosts()} />
    </>
  );
}
