# TODO

각 항목에 **착수 조건**을 붙였다. 조건이 안 차면 하지 않는다.
조건 없이 "언젠가"만 적힌 항목은 영원히 안 하거나, 필요 없을 때 하게 된다.

---

## 배포 직후 (v1 완료 시)

- [ ] **Vercel Speed Insights 켜기** — 대시보드 토글 하나
  조회수가 아니라 Core Web Vitals(LCP/CLS/INP). 허영 지표가 아니라 계기판이다.
  특히 확인할 것: 테마 인라인 스크립트가 CLS를 만드는지,
  vanilla-extract 제로런타임이 LCP에 실제로 기여하는지
- [ ] GitHub 저장소 About 의 **Website 필드**에 `https://tinyhex.dev`
- [ ] 다크 설정 + 하드 리프레시(⌘⇧R)로 **FOUC 없는지 확인**.
      DevTools 에서 Slow 3G 로 조여서 재확인

---

## 조건부 — 신호가 오면

| 항목 | 착수 조건 | 수단 / 비고 |
|---|---|---|
| **댓글 · 리액션** | 글 10편 + 실제 유입 | **giscus** (GitHub Discussions 백엔드). 서버 0, 스팸 0, 데이터가 내 저장소에 남음. **reactions 내장이라 좋아요 카운터를 따로 만들 필요 없음** |
| **Web Analytics** | 글 10편 이상 | Vercel Web Analytics. Hobby 월 5만 이벤트 무료. 3편일 땐 표본이 없어 노이즈만 본다 |
| 태그 필터 | 글 15편 + 태그가 3개 이상으로 갈릴 때 | frontmatter `tags` 는 v1부터 넣어뒀다 |
| 페이지네이션 | 글 20편 | 그 전엔 한 페이지가 더 읽기 좋다 |
| 검색 | 글 30편 | 그 전엔 Ctrl+F 로 충분 |
| 코드 하이라이팅 테마 | 코드 비중 높은 글 3편 | Shiki. 그 전엔 기본 `<pre>` 로 충분 |
| OG 이미지 자동생성 | 공유가 실제로 일어날 때 | `@vercel/og` |
| 테마 토글 3단계 (system/light/dark) | 2단계가 불편하다고 느낄 때 | v1은 2단계 (첫 방문 시스템 → 클릭하면 고정) |
| 강조색 결정 | 사이드 프로젝트 3개가 포폴에 올라간 뒤 | v1은 무채색 |
| 포폴과 공통 컴포넌트 추출 | **같은 컴포넌트가 세 번째 복사될 때** | 두 번까지는 복사한다. 성급한 공통화는 결합도를 높인다 |

---

## 즉시 판단 (조건이 아니라 중단 규칙)

- **vanilla-extract 셋업이 3시간을 넘으면 Tailwind 로 전환한다.**
  `createThemeContract` + `createTheme` 2개 + 토큰 파일 = 여기까지가 셋업이다.
  넘어가면 도구 문제가 아니라 지금 배울 때가 아닌 것이다.

---

## 하지 않기로 한 것

- **Disqus** — 광고가 붙고 무겁다. 개인 블로그에 서드파티 광고는 브랜딩 마이너스
- **Google Analytics 4** — 쿠키 배너가 필요하고 개인 블로그엔 과하다
- **조회수 · 좋아요 자체 구현** — Upstash/Supabase + Route Handler 로 가능하지만
  봇 트래픽, 중복 카운트, 어뷰징 처리가 붙는다. giscus reactions 로 커버된다
- **i18n** — 한국어만. 대상 독자가 국내 FE 다
- **CMS** — 콘텐츠는 MDX 파일로 둔다. 프레임워크를 갈아엎어도 글은 살아남아야 한다

---

## v1에서 뺀 것과 이유 (README 「설계 판단과 포기한 것」 재료)

- **Emotion 대신 vanilla-extract** — Next.js 공식 문서상 Emotion 은 App Router
  미지원("currently working on support"). 억지로 쓰면 모든 스타일 컴포넌트에
  `'use client'` 가 붙어 RSC 이점을 통째로 버린다
- **Tailwind 대신 vanilla-extract** — Tailwind 는 이미 실무에서 쓰고 있어
  포트폴리오에 넣어도 새로 증명되는 게 없다. 속도를 포기하고 증명력을 택했다
- **테마 토글에 인라인 스크립트** — `prefers-color-scheme` 만 쓰면 FOUC 가 없는데,
  토글을 넣는 순간 `localStorage`(=JS로만 읽힘)라는 상태가 생겨 깜빡임이 따라온다.
  편의의 대가다
- **분석 도구 없이 시작** — 표본이 없는 상태의 숫자는 주제 선정을 흔든다
