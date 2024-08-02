"use client";

import React, { useEffect, useState } from "react";

import * as Styled from "./ColorSchemeSwitch.styles";
import { Checkbox, useCheckboxStore } from "@ariakit/react";

export interface ColorSchemeSwitchProps {}

const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  const checkbox = useCheckboxStore({
    value: isDark,
    setValue: toggleTheme,
  });

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <Styled.Wrapper>
      <label className="label">
        <Checkbox store={checkbox} suppressHydrationWarning /> Color scheme
      </label>
    </Styled.Wrapper>
  );
};

export default ColorSchemeSwitch;
