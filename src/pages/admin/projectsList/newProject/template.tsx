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
import {createProject} from "@shared/api/projectService";
import {createTeam} from "@shared/api/teamService/teamService";


export function NewProject() {
  const client = useQueryClient()
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

  const {error, data, mutate: create} = useMutation({
    mutationFn: createProject,
    onMutate: () => {
    },
    onSuccess: () => {
      console.log(data)
      alert("Успешно")
      client.invalidateQueries({queryKey: ["projects"]})
    },
    onError: (error, variables, context) => {
      // @ts-ignore
      alert(error.response.data.message)
    }
  })

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(projectName, projectId)
    if (projectName && projectId) {
      const props = {projectName, projectId}
      create(props)
    }
  }
  return (
    <>

        <div className="bg-primary dark:bg-lightGray-dark shadow sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-primaryText-dark">Создать проект</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-grayText-dark">
              <p>Минимальный набор</p>
            </div>
            <form className="mt-5 flex gap-4" onSubmit={(e) => handleSubmit(e)}>
              <div className={""}>

                <input className={"primaryInput placeholder:text-sm mb-2"}
                       placeholder={"Название проекта"}
                       onChange={e => setProjectName(e.target.value)}/>
                <input className={"primaryInput placeholder:text-sm"}
                       placeholder={"ID команды"}
                       onChange={e => setProjectId(e.target.value)}/>
              </div>
              <button
                disabled={!projectName || !projectId}
                type="submit"
                className={'deleteButton'}
              >
                <p>Создать</p>
              </button>
            </form>
          </div>
        </div>

    </>
    )
}
