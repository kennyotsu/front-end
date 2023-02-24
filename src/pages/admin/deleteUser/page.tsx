import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import splashBlue from 'shared/assets/img/splash-blue.png'
import splashDark from 'shared/assets/img/splash-dark.png'
import styled from 'styled-components';
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";
import {ThemeToggle} from "features/themeToggle";
import {CallSupport} from "features/callSupport";
import GetElementAbsolutePos from '@shared/lib/getElementAbsolutePos'
import {motion} from "framer-motion";
import Confetti from "react-confetti";
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";



export function DeleteUser() {
  const [userId, setUserId] = useState("");
  async function handleSubmit(e) {
    e.preventDefault()
    console.log(userId)
    // @ts-ignore
    const res = await axios.post('https://pp-luqq.onrender.com/users/del', {
      id: userId
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Удалить пользователя по ID</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Это действие нельзя отменить.</p>
            </div>
            <form className="mt-5 flex gap-4" onSubmit={(e) => handleSubmit(e)}>
              <div className={""}>

                <input className={"primaryInput "} onChange={e => setUserId(e.target.value)}/>
              </div>
              <button
                disabled={!userId}
                type="submit"
                className="disabled:bg-lightGray disabled:text-slate-500 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              >
                Удалить аккаунт {userId && `с ID ${userId}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
