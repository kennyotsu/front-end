import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import useThemeStore from "../../app/stores/useThemeStore";
import {motion} from "framer-motion";
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";
import {ThemeToggle} from "features/themeToggle";
import {CallSupport} from "features/callSupport";
import {RegisterForm} from "@pg/register/form";

export function RegisterPage() {
// @ts-ignore
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);



  return (
    <>
      <Helmet>
        <title>Регистрация</title>
        {/*<meta name="theme-color" content={themeState}/>*/}
      </Helmet>

      <div className={"flex flex-row justify-end mt-2 mr-4 sticky top-0 z-10"}>
        <CallSupport/>
        <ThemeToggle/>
      </div>
      <motion.div className={"m-auto max-w-[500px] mt-[5%] relative text-primaryText dark:text-primaryText-dark p-6"}
                  initial={{
                    opacity:0,
                    translateX: -50
                  }}
                  animate={{
                    opacity:1,
                    translateX: 0
      }}
                  transition={{
                    duration: 0.6,
                  }}
      >
        <div className={"children absolute right-6"}>
        </div>
        <img id={"appLogo"} src={""} className={'children appLogo h-14 mt-16'} alt={'логотип'}/>

        <RegisterForm />

      </motion.div>
    </>
  )
}


