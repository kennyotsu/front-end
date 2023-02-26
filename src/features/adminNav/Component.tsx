import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";


export function AdminNav() {
  return (
    <div className={"adminNav"}>
      <NavLink to={"/admin/users"}>
        {({ isActive }) => (
          <button
            className={
              isActive ? "adminNav-btn adminNav-btn-active" : "adminNav-btn"
            }>
            <p>Пользователи</p>
          </button>
        )}
      </NavLink>
      <NavLink to={"/admin/teams"}>
        {({ isActive }) => (
          <button
            className={
              isActive ? "adminNav-btn adminNav-btn-active" : "adminNav-btn"
            }>
            <p>Команды</p>
          </button>
        )}
      </NavLink>
      <NavLink to={"/admin/projects"}>
        {({ isActive }) => (
          <button
            className={
              isActive ? "adminNav-btn adminNav-btn-active" : "adminNav-btn"
            }>
            <p>Проекты</p>
          </button>
        )}
      </NavLink>
    </div>
  )

}

