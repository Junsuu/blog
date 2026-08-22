import { type ComponentProps, isValidElement, type ReactNode } from 'react';
import { slugify } from '@/posts/model/toc';

/**
 * 앵커 id 를 만들려면 헤딩의 평문이 필요한데, children 은 `## `code` 를 쓰는 법` 처럼
 * 엘리먼트를 품고 있을 수 있다. 그래서 재귀로 텍스트만 걷어낸다.
 */
function toPlainText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return toPlainText(node.props.children);
  return '';
}

/**
 * 목차(toc.ts)와 동일한 slugify 로 id 를 붙인다. 두 곳이 같은 함수를 쓰는 것이
 * 앵커가 맞아떨어지는 유일한 근거다.
 */
function createHeading(Tag: 'h2' | 'h3') {
  return function Heading({ children, ...rest }: ComponentProps<'h2'>) {
    return (
      <Tag id={slugify(toPlainText(children))} {...rest}>
        {children}
      </Tag>
    );
  };
}

export const mdxComponents = {
  h2: createHeading('h2'),
  h3: createHeading('h3'),
};
