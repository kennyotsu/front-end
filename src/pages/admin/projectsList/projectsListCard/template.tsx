import { motion } from 'framer-motion';
import React, {useEffect, useState} from 'react';


export function ProjectsListCard(props) {
  const {key, id, name, team_id, link,is_approved} = props.data
  const index = props.index
  function MapApprovementStatus(){
    if (!is_approved){
      return <p><span className={"text-secondary"}>Не подтвержден</span></p>
    }
    if (is_approved) {
      return <p><span className={"text-blue-500"}>Подтвержден ✔</span></p>
    }
  }
  function IsLink(){
    if (!link){
      return <span className={"text-secondary"}>не указано</span>
    }
    return <span className={""}>{link}</span>
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
      className={"mb-4 shadow sm:rounded-lg bg-primary dark:bg-lightGray-dark text-primaryText dark:text-primaryText-dark px-4 py-5 sm:p-6"}>

        <h1><span>{name}</span></h1>
        <p>Project Id: <span>{id}</span></p>
        <p>Team Id: <span>{team_id}</span></p>
        <p>link: <IsLink/></p>
        {MapApprovementStatus()}
    </motion.div>
    )
}
