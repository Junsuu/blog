export type TocEntry = {
  depth: 2 | 3;
  text: string;
  slug: string;
};

/**
 * 헤딩 텍스트 → 앵커 슬러그.
 *
 * 목차와 본문의 h2/h3 가 **같은 이 함수**를 쓴다. 슬러그 생성이 두 군데로 갈라지면
 * 목차 링크가 존재하지 않는 앵커를 가리키게 되는데, 그게 조용히 깨지는 종류의 버그다.
 *
 * 한글을 그대로 살린다 — 로마자로 옮기면 URL 이 읽기 어려워지고 되돌릴 수도 없다.
 */
export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, '') // 마크다운 강조 기호
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // 글자·숫자·공백·하이픈만 남긴다
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * MDX 원문에서 h2 · h3 를 뽑아 목차를 만든다.
 *
 * rehype 플러그인을 쓰지 않는 이유는 의존성을 늘리지 않기 위해서다. 대신 코드펜스 안의
 * '#' 을 헤딩으로 오인하지 않도록 펜스 상태를 추적한다 (셸 주석 `# comment` 가 대표적).
 */
export function extractToc(markdown: string): TocEntry[] {
  const entries: TocEntry[] = [];
  let insideFence = false;

  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      insideFence = !insideFence;
      continue;
    }
    if (insideFence) continue;

    // '## 제목' 또는 '### 제목'. 끝에 붙는 닫는 '#' 은 버린다.
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const text = match[2].trim();
    entries.push({
      depth: match[1].length as 2 | 3,
      text,
      slug: slugify(text),
    });
  }

  return entries;
}
