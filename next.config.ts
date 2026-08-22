import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

/**
 * 번들러를 webpack 으로 고정한다 (package.json 의 dev/build 가 --webpack 을 넘긴다).
 *
 * Next 16 은 Turbopack 이 기본이지만 이 조합은 아직 못 쓴다:
 * @vanilla-extract/turbopack-plugin 은 0.1.3 이고, Turbopack 의 Node 평가 샌드박스
 * 안에서 vanilla-extract 컴파일러가 띄우는 rolldown 의 네이티브 바인딩 해석이 실패한다
 * ("Cannot find native binding"). 바이너리 자체는 멀쩡하고 샌드박스 밖에서는 잘 해석된다.
 *
 * 그래서 unstable_turbopack 은 기본값 'off' 로 두고 성숙한 webpack 경로만 쓴다.
 * turbopack-plugin 이 안정화되면 mode: 'auto' 로 바꾸고 --webpack 을 떼면 된다.
 */
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {};

export default withVanillaExtract(nextConfig);
