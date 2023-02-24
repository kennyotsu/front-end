import { THEME_TYPES } from "shared/themes";

// for tailwind css, need the change the root
export const applyThemePreference = (theme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = document.getElementsByTagName('body')[0];
  const html = document.getElementsByTagName( 'html' )[0];
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
  root.classList.remove(isDark ? 'primaryLight' : 'primaryDark');
  root.classList.add(!isDark ? 'primaryLight' : 'primaryDark');
};
