import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

/**
 * 목적은 접근성 정적 검사 하나다.
 *
 * typescript-eslint 는 .tsx 를 파싱하기 위한 파서로만 쓰고, 그쪽 규칙셋은 켜지 않는다.
 * 타입 관련 실수는 이미 `pnpm typecheck` 가 잡고, 스타일 규칙까지 들이면
 * 이 저장소가 의도적으로 비워둔 린트 예산을 넘어선다.
 *
 * 모든 규칙은 warn 이다. 접근성 문제로 빌드를 세우지 않고 작성 직후에 알려주기만 한다.
 */
const a11yRecommended = jsxA11y.flatConfigs.recommended;

export default [
  {
    ignores: ['.next/**', 'next-env.d.ts'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    ...a11yRecommended,
    files: ['**/*.tsx'],
    rules: Object.fromEntries(
      Object.keys(a11yRecommended.rules).map((rule) => [rule, 'warn']),
    ),
  },
];
