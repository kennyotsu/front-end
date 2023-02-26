import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import splashBlue from 'shared/assets/img/splash-blue.png'
import splashDark from 'shared/assets/img/splash-dark.png'
import styled from 'styled-components';
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";
import {ThemeToggle} from "@ft/themeToggle";
import {CallSupport} from "@ft/callSupport";
import GetElementAbsolutePos from '@shared/lib/getElementAbsolutePos'
import {motion} from "framer-motion";
import Confetti from "react-confetti";
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {removeUser} from "@shared/api/usersService/usersService";


export function DeleteUser() {
  const client = useQueryClient()
  const [userId, setUserId] = useState("");
  const [buttonState, setButtonState] = useState({class: 'deleteButton', prompt: null})

  const {mutate: remove} = useMutation({
    mutationFn: removeUser,
    onMutate: () => {
      setButtonState({class: 'deleteButton-mutating', prompt: null})
    },
    onSuccess: () => {
      client.invalidateQueries({queryKey: ["users"]})
      setButtonState({class: 'deleteButton', prompt: null })
      // alert('Удален успешно. Бэк не отдает ничего кроме 200 ОК, так что можно очень успешно удалить несуществующего юзера. Добавил в TODO')
    }
  })


  async function handleSubmit(e) {
    e.preventDefault()
    console.log(userId)
    if (userId) {
      remove(userId)
    }
  }

  return (
    <>

        <div className="bg-primary dark:bg-lightGray-dark shadow sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-primaryText-dark">Удалить пользователя по ID</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-grayText-dark">
              <p>Это действие нельзя отменить. Совсем-совсем нельзя.</p>
            </div>
            <form className="mt-5 flex gap-4" onSubmit={(e) => handleSubmit(e)}>
              <div className={""}>

                <input className={"primaryInput placeholder:text-sm"}
                       placeholder={"введите ID"}
                       onChange={e => setUserId(e.target.value)}/>
              </div>
              <button
                disabled={!userId}
                type="submit"
                className={buttonState.class}
              >
                <p>Удалить пользователя {userId && `с ID ${userId}`}</p>
              </button>
            </form>
          </div>
        </div>

    </>
    )
}
