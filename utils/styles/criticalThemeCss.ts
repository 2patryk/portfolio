import { darkColors } from "./theme";

/**
 * Inline critical CSS for dark theme – included in initial HTML so it applies
 * before any JS bundle (fixes flash after production build).
 */
const vars = Object.entries(darkColors)
  .map(([key, value]) => `--${key}:${value}`)
  .join(";");

export const criticalThemeCss = `@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){color-scheme:dark;${vars}}
  :root:not([data-theme="light"]) body{background-color:var(--background);color:var(--textPrimary)}
}`;
