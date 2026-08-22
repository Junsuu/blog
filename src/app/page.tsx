import { getPublishedPosts } from '@/posts/posts';
import { PostList } from '@/posts/PostList';

export default function HomePage() {
  return <PostList posts={getPublishedPosts()} />;
}
