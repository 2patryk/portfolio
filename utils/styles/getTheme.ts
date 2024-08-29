declare global {
  interface Window {
    __onThemeChange: any;
    __theme: any;
    __setPreferredTheme: any;
  }
}

const code = function () {
  window.__onThemeChange = function () {};

  function setTheme(newTheme: any) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
  }

  var preferredTheme;

  try {
    preferredTheme = localStorage.getItem("theme");
    console.log('preferredTheme', preferredTheme);
  } catch (err) {}

  window.__setPreferredTheme = function (newTheme: any) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {}
  };

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
};

export const getTheme = `(${code})();`;
