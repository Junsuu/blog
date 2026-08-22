import { getPublishedPosts } from '@/posts/model/posts';
import { site } from '@/site';

// 글은 빌드 타임에 다 정해지므로 정적으로 굽는다.
export const dynamic = 'force-static';

const XML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

/**
 * 한 번의 순회로 치환한다. '&' 를 따로 먼저 바꾸면 뒤이어 만든 엔티티의 '&' 를
 * 다시 이스케이프하는 사고가 나기 쉽다.
 */
function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => XML_ENTITIES[char]);
}

/** RSS 의 pubDate 는 RFC 822 형식을 요구한다. YYYY-MM-DD 를 UTC 자정으로 해석한다. */
function toRfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

function toItem(post: { slug: string; title: string; summary: string; date: string }): string {
  const url = `${site.url}/posts/${post.slug}`;

  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <description>${escapeXml(post.summary)}</description>
    </item>`;
}

export function GET() {
  // getPublishedPosts 가 draft 를 이미 걸러낸다.
  const items = getPublishedPosts().map(toItem).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${escapeXml(site.url)}</link>
    <description>${escapeXml(site.description)}</description>
    <language>ko</language>
    <atom:link href="${escapeXml(`${site.url}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
  });
}
