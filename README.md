# tinyhex.dev

개인 기술 블로그. Next.js App Router + TypeScript + vanilla-extract.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## 글 쓰기

`content/posts/` 에 `.mdx` 파일을 만든다. 파일명이 그대로 URL 이 된다
(`hello-world.mdx` → `/posts/hello-world`).

```mdx
---
title: 글 제목
date: 2026-08-22
summary: 목록과 RSS 에 보이는 한 줄 요약.
tags: ['next.js']
draft: false
---

본문. `##` 과 `###` 가 목차에 자동으로 잡힌다.
```

### frontmatter 스키마는 고정이다

`title` · `date` · `summary` · `tags` · `draft` 다섯 개. 이 스키마는 프레임워크보다
오래 살아남으라고 만든 것이라, 바꾸려면 기존 글을 전부 건드려야 한다는 뜻이다.

- `title` · `date` · `summary` 는 필수다. 비어 있으면 **빌드가 실패한다** —
  스키마가 깨진 글이 조용히 배포되는 것보다 낫다
- `date` 는 `YYYY-MM-DD`. 따옴표는 있어도 없어도 된다
- `tags` · `draft` 는 생략하면 각각 `[]` 와 `false` 로 처리된다

### draft 와 `content/drafts/` 는 다른 것이다

| | 목록·RSS | 직접 URL | 용도 |
|---|---|---|---|
| `draft: true` | 빠진다 | 열린다 (`noindex`) | 배포 전 미리보기 |
| `content/drafts/` 에 둔 파일 | — | — | 사이트가 아예 읽지 않는 서랍 |

## 디자인 예산

넘치면 추가하는 게 아니라 넘치는 쪽을 잘라낸다.

- 색 6개 — `src/styles/contract.css.ts`
- 타이포 4단계 · 간격 4단계(4·8·16·32) — `src/styles/tokens.ts`
- 폰트 1개 (Pretendard, jsDelivr CDN), 최대 폭 720px, 브레이크포인트 1개(768px)
- v1 은 무채색. 강조색은 글이 쌓인 다음에 정한다

컴포넌트는 색 **계약**만 참조한다. 실제 색값은 `contract.css.ts` 한 곳에만 있다.

## 알아둘 것

### 번들러가 webpack 으로 고정돼 있다

Next 16 은 Turbopack 이 기본이지만 `dev`/`build` 에 `--webpack` 을 넘긴다.
`@vanilla-extract/turbopack-plugin` 이 아직 0.1.x 라, Turbopack 의 Node 평가 샌드박스
안에서 vanilla-extract 컴파일러가 띄우는 rolldown 네이티브 바인딩 해석이 실패한다.

플러그인이 안정화되면 `next.config.ts` 에서 `unstable_turbopack: { mode: 'auto' }` 를 켜고
`--webpack` 을 떼면 된다.

### 다크/라이트는 2단계다

첫 방문은 `prefers-color-scheme` 을 따르고, 토글을 한 번이라도 누르면 그 선택이
`localStorage` 에 고정된다. system/light/dark 3단계 순환은 만들지 않았다.

FOUC 를 막는 건 `src/theme/themeScript.ts` 의 인라인 스크립트다. `<head>` 안에서
**동기로** 실행돼야 첫 페인트 전에 테마가 정해진다 — 위치나 실행 방식을 바꾸면 깜빡인다.

### 목차에 rehype 플러그인을 쓰지 않는다

`src/posts/model/toc.ts` 가 MDX 원문에서 `##`/`###` 를 직접 뽑는다. 코드펜스 안의
`#` 은 건너뛴다. 목차와 본문 헤딩이 **같은 `slugify`** 를 쓰는 것이 앵커가 맞아떨어지는
유일한 근거이므로, 한쪽만 고치면 안 된다.

## 구조

```
content/posts/       글 — 프레임워크와 무관하게 살아남는 부분
src/
  site.ts            사이트 상수 (metadata·RSS 가 공유)
  styles/            색 계약 · 토큰 · 전역 리셋
  posts/
    model/           글 읽기 · frontmatter 검증 · 목차 추출 (fs 접근, UI 없음)
    ui/              목록 · 목차 · MDX 매핑 · 본문 스타일
  theme/             인라인 스크립트 + 토글 (유일한 클라이언트 컴포넌트)
  app/               / · /posts/[slug] · /about · /rss.xml
```

## v1 에 없는 것

태그 필터 · 검색 · 댓글 · 조회수 · OG 이미지 자동생성 · 시리즈 · 페이지네이션 ·
코드 하이라이팅 · i18n. 글이 서른 편쯤 쌓인 뒤에 필요해지는 것들이고, 그 전에 만들면
유지비만 낸다.
