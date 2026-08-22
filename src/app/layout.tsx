import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/site';
import { themeScript } from '@/theme/themeScript';
import '@/styles/global.css';
import * as styles from './layout.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: 아래 인라인 스크립트가 하이드레이션 전에
    // data-theme 을 붙이므로 서버 HTML 과 클라이언트 DOM 이 의도적으로 어긋난다.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* 첫 페인트 전에 테마를 확정한다. 위치와 동기 실행이 FOUC 방지의 핵심이라 옮기지 말 것. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className={styles.shell}>
          <SiteHeader />
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            © {site.author} ·{' '}
            <a href="/rss.xml" className={styles.footerLink}>
              rss
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
