import React from 'react'
import {Link} from "react-router-dom";
import {useUserStore} from "../../../app/stores/useUserStore";
import shallow from "zustand/shallow";
import {nameToUpperCase} from "@shared/lib/parsers/nameToUpperCase";
import {shortenSurname} from "@shared/lib/parsers/shortenSurname";

export function RegisterForm() {

  const [name, updateName] = useUserStore(
    (state) => [state.name, state.updateName],
    shallow
  )
  const [surname, updateSurname] = useUserStore(
    (state) => [state.surname, state.updateSurname],
    shallow
  )
  const [email, updateEmail] = useUserStore(
    (state) => [state.email, state.updateEmail],
    shallow
  )
  const [phone, updatePhone] = useUserStore(
    (state) => [state.phone, state.updatePhone],
    shallow
  )
  function handleSubmit(e) {
    e.preventDefault()
    alert(`
      ${name} ${surname} ${email} ${phone}
    `)
  }
  return(
    <>
    <div>
      <h2 className={'children mt-8'}>
        Рады вас видеть,
        <span className={"text-secondary dark:text-secondary-dark"}>
          {` ${nameToUpperCase(name)} ${(name && surname && shortenSurname(surname, 0))}`}
        </span>
      </h2>
      <p>Вы регистрируете новый профиль</p>
    </div>
    <form className={"children mt-16 flex flex-col"} onSubmit={(e) => handleSubmit(e)}>
      <label className={"primaryLabel"}>Ваше имя</label>
      <div className={"flex flex-row w-full gap-4 mb-"}>
        <input autoComplete={"off"} className={'mb-4 primaryInput'} placeholder={"Имя"} type={"text"}
               onChange={(e) => updateName(e.target.value)}
               value={name}/>
        <input autoComplete={"off"} className={'mb-4 primaryInput'} placeholder={"Фамилия"} type={"text"}
               onChange={(e) => updateSurname(e.target.value)}
               value={surname}/>
      </div>
      <label className={"primaryLabel"}>Электронная почта</label>
      <input autoComplete={"off"} className={'mb-4 primaryInput'} placeholder={"Электронная почта"} type={"email"}
             onChange={(e) => updateEmail(e.target.value)}
             value={email}/>
      <label className={"primaryLabel"}>Номер телефона</label>
      <input autoComplete={"off"} className={'mb-4 primaryInput'} placeholder={"Номер телефона"} type={"tel"}
             onChange={(e) => updatePhone(e.target.value)}
             value={phone}/>
      <button className={"children primaryButton mt-4"} type={"submit"}>далее</button>
      <Link to={"/login"} className={"m-auto"}>
        <button className={"children mt-8  mb-16"}>уже зарегистрированы? <span className={" text-secondary dark:text-secondary:dark underline underline  underline-offset-4 cursor-pointer"}>войдите</span></button>
      </Link>
    </form>
    </>
  )
}
