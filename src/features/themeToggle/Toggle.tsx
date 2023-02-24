import React, {useEffect} from "react";
import {HiOutlineMinusSm, MdOutlineDarkMode} from "react-icons/all";
import styled from "styled-components";
import useThemeStore from "../../app/stores/useThemeStore";
import {applyThemePreference} from "./model/toggleTheme";

const DMToggle = styled(MdOutlineDarkMode).attrs({
    title: 'переключить режим страницы'
  })`
        font-size: 1.6rem;
    `
  const DMindication = styled(HiOutlineMinusSm)`
      font-size: 1.6rem;
  `

  export const ThemeToggle = () => {
  // @ts-ignore
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  // @ts-ignore
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
    return (
      <div className='p-3 mr-2 rounded-lg transition-all'>
        <div className='relative top-[-2px] cursor-pointer '  onClick={toggleTheme}>
          <DMToggle className={"fill-grayText dark:fill-primaryText-dark"}/>
          <DMindication className={theme === 'dark' ? "DMindication DMindication-active" : "DMindication"}/>
        </div>
      </div>
    )

}
