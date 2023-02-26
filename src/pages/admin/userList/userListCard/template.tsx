import { motion } from 'framer-motion';
import React, {useEffect, useState} from 'react';


export function UserListCard(props) {
  const {key, id, username, role_id, email} = props.data
  const index = props.index
  function Email(){
    if (!email){
      return <span className={"text-secondary"}>не указан</span>
    }
    return <span className={""}>{email}</span>
  }
  async function copyPageUrl(id) {
    try {
      await navigator.clipboard.writeText(id);
      console.log('ID скопирован');
    } catch (err) {
      console.error('Не удалось скопировать: ', err);
    }
  }
  return (
    <motion.div
      onClick={() =>  copyPageUrl(id)}
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1,scale: 1}}
      transition={{delay: 0.08 * index}}
      key={key}
      className={role_id === 1
        ? "mb-4 shadow sm:rounded-lg bg-primary dark:bg-lightGray-dark text-primaryText dark:text-primaryText-dark px-4 py-5 sm:p-6"
        : role_id === 2
          ? "mb-4 shadow sm:rounded-lg bg-primary dark:bg-lightGray-dark text-primaryText dark:text-primaryText-dark px-4 py-5 sm:p-6"
          : "mb-4 shadow sm:rounded-lg bg-primary dark:bg-lightGray-dark text-primaryText dark:text-primaryText-dark px-4 py-5 sm:p-6"
      }>

        <h1><span>{username}</span></h1>
        <p>ID: <span>{id}</span></p>
        <p>Role Id: <span>{role_id}</span></p>
        <p>E-mail: <Email/></p>
    </motion.div>
    )
}
