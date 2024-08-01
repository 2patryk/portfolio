"use client";

import { useGlobalStore } from "@/utils/globalStore";
import { LOCAL_STORAGE_COLOR_SCHEME_KEY } from "@/utils/vars";
import { useEffect } from "react";

type ColorScheme = "light" | "dark";

const usePrefersColorScheme = (): ColorScheme => {
  const { colorScheme, setColorScheme } = useGlobalStore();

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const documentChangeHandler = () => {
      if (!localStorage.getItem(LOCAL_STORAGE_COLOR_SCHEME_KEY)) {
        setColorScheme(mediaQueryList.matches ? "dark" : "light");
      }
    };

    mediaQueryList.addEventListener("change", documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [setColorScheme]);

  useEffect(() => {
    console.log("change object color to: ", colorScheme);
    localStorage.setItem(LOCAL_STORAGE_COLOR_SCHEME_KEY, colorScheme);
  }, [colorScheme]);

  return colorScheme;
};

export default usePrefersColorScheme;
