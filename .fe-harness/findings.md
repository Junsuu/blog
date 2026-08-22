# findings — 루프가 도는 증거

`/lap` 이 한 줄씩 덧붙인다. 손으로 고쳐도 되지만 탭 6개 · 7칸 형식을 지킬 것.

```
날짜	커밋	출처	카테고리	요약	파일	처리
```

2026-08-23	a5845dc	review	a11y	목차 링크 대비 4.40:1 로 AA 미달 (textMuted on accentBg)	src/styles/contract.css.ts	반영
2026-08-23	a5845dc	review	a11y	홈에 h1 이 없어 목록이 h2 로 시작	src/app/page.tsx	반영
2026-08-23	a5845dc	review	a11y	테마 토글이 현재 테마를 보조기술에 알리지 않음	src/theme/ThemeToggle.tsx	반영
2026-08-23	a5845dc	review	a11y	푸터 rss 링크가 색·밑줄 모두 없어 링크로 식별 불가	src/app/layout.tsx	반영
2026-08-23	a5845dc	review	a11y	헤더 nav 에 이름이 없어 목차 nav 와 구분 안 됨	src/components/SiteHeader.tsx	반영
2026-08-23	a5845dc	review	cohesion	scrollPaddingTop 32px 하드코딩 — space.lg 와 중복	src/styles/global.css.ts	반영
2026-08-23	a5845dc	review	predictability	슬러그 중복·빈 슬러그가 조용히 중복 id 생성	src/posts/tableOfContents.ts	미룸:현재 콘텐츠에 충돌 없음. 빌드 가드는 다음 루프에서
2026-08-23	a5845dc	review	a11y	목록 카드 전체가 링크라 접근 이름이 제목+날짜+요약 통째	src/posts/PostList.tsx	미룸:::after 오버레이가 본문 드래그 선택을 막는 트레이드오프
2026-08-23	a5845dc	review	a11y	폰트 크기가 전부 px 라 브라우저 기본 글꼴 확대에 반응 안 함	src/styles/tokens.ts	미룸:1.4.4 위반 아님. 줌은 정상 동작
