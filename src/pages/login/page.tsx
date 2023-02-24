import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import splashBlue from 'shared/assets/img/splash-blue.png'
import splashDark from 'shared/assets/img/splash-dark.png'
import styled from 'styled-components';
import useThemeStore from "../../app/stores/useThemeStore";
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";
import {ThemeToggle} from "features/themeToggle";
import {CallSupport} from "features/callSupport";
import GetElementAbsolutePos from '@shared/lib/getElementAbsolutePos'
import {motion} from "framer-motion";
import Confetti from "react-confetti";
import {Link, useSearchParams} from "react-router-dom";


export function LoginPage() {
// @ts-ignore
  const theme = useThemeStore((state) => state.theme);
  const [isConfetti, setConfetti] = useState(false)
  const [pos, setPos] = useState({x: 0, y:0})
  const [searchParams, setSearchParams] = useSearchParams();
  const [isRequired, setRequired] = useState(searchParams.get("required"));



  function runConfetti(){
    setConfetti(true)
    const logo = document.getElementById('appLogo')
    const res = GetElementAbsolutePos(logo)
    const {left, top} = res
    setPos({x: left + 20, y: top + 10})
    console.log(left)
    console.log(top)
  }

  useEffect(() => {
    applyThemePreference(theme);

  }, [theme]);


  return (
    <>
      <Helmet>
        <title>Логин</title>
        {/*<meta name="theme-color" content={themeState}/>*/}
      </Helmet>

      {/*@ts-ignore  */}
      <Confetti run={isConfetti} recycle={false} onConfettiComplete={(confetti: Confetti) => setConfetti(false)} colors={['#00528f','#c2c2c2','#27acff','#0c81ff','#0c81ff',]} confettiSource={{
        x: pos.x, y: pos.y,
        w: 20, h: 0
      }}/>
      <div className={"flex flex-row justify-end mt-2 mr-4 top-0 sticky z-10"}>
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
        <img id={"appLogo"} src={""} className={'children appLogo h-14 mt-16'} alt={'логотип'}
        onClick={() => runConfetti()}/>
        {
          isRequired
            ? <div>
                <h2 className={'children mt-8 mb-2'}>
                  Войдите или <Link to={"/register"}><span className={"text-secondary dark:text-secondary:dark underline underline-offset-auto cursor-pointer"}>зарегистрируйтесь,</span></Link> <br/> чтобы продолжить
                </h2>
                <p></p>
              </div>
            : <div>
                <h2 className={'children mt-8'}>
                  Добро пожаловать,
                </h2>
                <p>пожалуйста войдите в профиль</p>
              </div>
        }

        <div className={"children mt-16 flex flex-col"}>
          <input className={'children mb-4 primaryInput'} placeholder={"Введите телефон или почту"} type={"text"}/>
          <button className={"children primaryButton "}>войти</button>
          <Link to={"/register"} className={"m-auto"}>
            <button className={"children mt-8 mb-16"}>нет профиля? <span className={"text-secondary dark:text-secondary:dark underline  underline-offset-4 cursor-pointer"}>зарегиструйтесь</span></button>
          </Link>
        </div>

      </motion.div>
    </>
  )
}


