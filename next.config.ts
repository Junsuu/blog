import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

// Next 16 부터 Turbopack 이 기본 번들러다. 이 플러그인의 unstable_turbopack.mode 는
// 'auto' 가 기본값이라 Next >= 16 에서 Turbopack 설정을 알아서 붙인다.
// 만약 Turbopack 경로가 깨지면 `next build --webpack` 으로 폴백할 수 있다.
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {};

export default withVanillaExtract(nextConfig);
