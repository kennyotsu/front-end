import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import splashBlue from 'shared/assets/img/splash-blue.png'
import splashDark from 'shared/assets/img/splash-dark.png'
import styled from 'styled-components';
import useThemeStore from "../../../app/stores/useThemeStore";
import {applyThemePreference} from "@ft/themeToggle/model/toggleTheme";
import {ThemeToggle} from "@ft/themeToggle";
import {CallSupport} from "@ft/callSupport";
import GetElementAbsolutePos from '@shared/lib/getElementAbsolutePos'
import {AnimatePresence, motion} from "framer-motion";
import Confetti from "react-confetti";
import {Link, useSearchParams} from "react-router-dom";
import {DeleteProject} from "@pg/admin/projectsList/deleteProject";
import {useQuery} from "@tanstack/react-query";
import {fetchAllUsers} from "@shared/api/usersService"
import {queryKey} from "@tanstack/react-query/build/lib/__tests__/utils";
import axios from "axios";
import {UserListCard} from "@pg/admin/userList/userListCard";
import {NewUser} from "@pg/admin/userList/newUser";
import {AdminNav} from "@ft/adminNav";
import {ProjectsListCard} from '@pg/admin/projectsList/projectsListCard'
import {NewProject} from "@pg/admin/projectsList/newProject/template";



export function ProjectsList() {
  const { isLoading, error, data, isFetching } = useQuery(["projects"], () =>
    axios.get(
      "https://pp-luqq.onrender.com/projects"
    ).then((res) => res.data.projectsData)
  );
  console.log(data)


  // <div className={"mb-4 shadow sm:rounded-lg bg-white px-4 py-5 sm:p-6"}>Загружаем...</div>
  return (
    <>
      <Helmet>
        <title>Проекты</title>
      </Helmet>
      <div className={"flex flex-row justify-end mt-2 mr-4 top-0 sticky z-10"}>
        <CallSupport/>
        <ThemeToggle/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto ">
        <h2 className={"text-primaryText dark:text-primaryText-dark mb-8"}>Нажмите на карточку, чтобы скопировать ID</h2>
          <NewProject/>
          <AnimatePresence>
            {
              isLoading ? <motion.div className={"mb-4 shadow sm:rounded-lg bg-white px-4 py-5 sm:p-6"}>Загружаем...</motion.div> :
                data.map((data, index) => <ProjectsListCard key={index} data={data} index={index}/>)
            }
          </AnimatePresence>
          <DeleteProject/>
          {isFetching ? <motion.div className={"isUpdating"}>Обновляем...</motion.div> : null}
          <div>{error ? `Ошибка при загрузке проектов: ${error}` : ""}</div>
        </div>
      </div>
      <AdminNav/>
    </>
  )
}


