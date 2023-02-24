import React, {useEffect, useState} from "react";
import 'tailwindcss/tailwind.css'
import './index.scss'
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import { Pages } from '../pages'
import useThemeStore from "./stores/useThemeStore";
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";

const Globals = createGlobalStyle`
  html {
    font-size: 16px;
    min-height: -webkit-fill-available;
  }

  body {
    margin: 0;
    overflow-y: auto;
    padding: 0;
    font-family: 'Evolventa', sans-serif;
    //background-color: unset !important;
  }

  * {
    box-sizing: border-box;
  }
`;
// APP компонента.
// Выполняет сугубо обертку и компоновку, вся логика должна быть вынесена на соответсвующую страницу в /Pages.
// Роутинг - в  `pages/index.tsx
// Глобальные процессы описаны в /Processes

function App() {
  // @ts-ignore
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
// @ts-ignore
  const theme = useThemeStore((state) => state.theme);
  // const [themeState, setThemeState] = useState('black')

  useEffect(() => {
    applyThemePreference(theme);
    // console.log(theme)
    // if (theme === "dark") {
    //   setThemeState('tomato')
    // } else {
    //   setThemeState('white')
    // }
  }, [theme]);

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'ru' }}
        defaultTitle="test"
      >
        {/*<meta name='theme-color' content={themeState}/>*/}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Globals />

      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
