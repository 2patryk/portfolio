import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import react from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  globalIgnores([".next/**", "storybook-static/**", "next-env.d.ts"]),
  ...nextCoreWebVitals,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  ...storybook.configs["flat/recommended"],
]);
