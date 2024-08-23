"use client";

import React, { useEffect, useState } from "react";
import * as Ariakit from "@ariakit/react";
import * as Styled from "./ColorSchemeSwitch.styles";
import ColorSchemeIcon from "./ColorSchemeIcon/ColorSchemeIcon";
import useHover from "@/hooks/useHover";

export interface ColorSchemeSwitchProps {}

const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");
  const [focusVisible, setFocusVisible] = useState(false);
  const isDark = theme === "dark";
  const [checked, setChecked] = useState(isDark ?? false);
  const [hoverRef, isHovered] = useHover<HTMLLabelElement>();

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <Styled.Label
      className="checkbox"
      data-checked={checked}
      data-focus-visible={focusVisible || undefined}
      suppressHydrationWarning
      ref={hoverRef}
    >
      <Ariakit.VisuallyHidden>
        <Ariakit.Checkbox
          clickOnEnter
          onFocusVisible={() => setFocusVisible(true)}
          onBlur={() => setFocusVisible(false)}
          onChange={(event) => {
            setChecked(event.target.checked);
            toggleTheme();
          }}
        />
      </Ariakit.VisuallyHidden>
      <Styled.IconWrapper>
        <ColorSchemeIcon isDark={isDark} isHovered={isHovered} />
      </Styled.IconWrapper>
    </Styled.Label>
  );
};

export default ColorSchemeSwitch;
