import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {ThemeToggle} from "@ft/themeToggle";
import {CallSupport} from "@ft/callSupport";
import {AnimatePresence, motion} from "framer-motion";
import {DeleteUser} from "@pg/admin/userList/deleteUser";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {UserListCard} from "@pg/admin/userList/userListCard";
import {NewUser} from "@pg/admin/userList/newUser";
import {AdminNav} from "@ft/adminNav";



export function UsersList() {
const { isLoading, error, data, isFetching } = useQuery(["users"], () =>
  axios.get(
    "https://pp-luqq.onrender.com/users"
  ).then((res) => res.data.usersData)
);
console.log(data)


  // <div className={"mb-4 shadow sm:rounded-lg bg-white px-4 py-5 sm:p-6"}>Загружаем...</div>
  return (
    <>
      <Helmet>
        <title>Пользватели</title>
      </Helmet>
      <div className={"flex flex-row justify-end mt-2 mr-4 top-0 sticky z-10"}>
        <CallSupport/>
        <ThemeToggle/>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto ">
        <h2 className={"text-primaryText dark:text-primaryText-dark mb-8"}>Нажмите на карточку, чтобы скопировать ID</h2>
        <NewUser/>
            <AnimatePresence>
            {
              isLoading ? <motion.div className={"mb-4 shadow sm:rounded-lg bg-white px-4 py-5 sm:p-6"}>Загружаем...</motion.div> :
                data.map((user, index) => <UserListCard key={index} data={user} index={index}/>)
            }
            </AnimatePresence>
            <DeleteUser/>
            {isFetching ? <motion.div className={"isUpdating"}>Обновляем...</motion.div> : null}
            <div>{error ? `Ошибка при загрузке пользователей: ${error}` : ""}</div>
          </div>
        </div>
      <AdminNav/>
    </>
  )
}


