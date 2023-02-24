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
import {DeleteUser} from "@pg/admin/deleteUser";


export function AdminPage() {


  return (
    <>
      <Helmet>
        <title>тест</title>
      </Helmet>
      <div className={"flex flex-row justify-end mt-2 mr-4 top-0 sticky z-10"}>
        <CallSupport/>
        <ThemeToggle/>
      </div>

      <DeleteUser/>
    </>
  )
}


