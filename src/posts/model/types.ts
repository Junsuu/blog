/**
 * frontmatter 스키마. **고정이다.**
 * 프레임워크를 갈아엎어도 content/ 의 글은 이 모양 그대로 살아남아야 한다.
 * 필드를 늘리거나 이름을 바꾸는 건 기존 글 전부를 건드리는 일이라는 뜻이다.
 */
export type PostFrontmatter = {
  title: string;
  /** YYYY-MM-DD */
  date: string;
  summary: string;
  tags: string[];
  draft: boolean;
};

/** 목록·RSS 에서 쓰는 형태. 본문은 들고 있지 않다. */
export type PostMeta = PostFrontmatter & {
  slug: string;
};

/** 본문까지 포함한 형태. 글 상세에서만 쓴다. */
export type Post = PostMeta & {
  content: string;
};
