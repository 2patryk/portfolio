import React from "react";

import * as Styled from "./ColorSchemeSwitch.styles";
import { Checkbox, useCheckboxStore } from "@ariakit/react";
import { useGlobalStore } from "@/utils/globalStore";

export interface ColorSchemeSwitchProps {}

const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = () => {
  const { colorScheme, setColorScheme } = useGlobalStore();
  const checkbox = useCheckboxStore({
    value: colorScheme === "dark",
    setValue: (value) => setColorScheme(value ? "dark" : "light"),
  });

  return (
    <Styled.Wrapper>
      <label className="label">
        <Checkbox store={checkbox} /> Color scheme
      </label>
    </Styled.Wrapper>
  );
};

export default ColorSchemeSwitch;
