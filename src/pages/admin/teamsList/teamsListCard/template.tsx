import { motion } from 'framer-motion';
import React, {useEffect, useState} from 'react';


export function TeamsListCard(props) {
  const {key, id, name, owner_id} = props.data
  const index = props.index

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
        <p>Team owner ID: <span>{owner_id}</span></p>
        <p>Team ID: <span>{id}</span></p>
    </motion.div>
    )
}
