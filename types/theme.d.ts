import { Theme } from "../utils/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
