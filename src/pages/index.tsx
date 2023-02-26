import React from 'react';
import { Route, Routes } from 'react-router'
import { HomePage } from './home'
import { LoginPage } from "./login";
import {RegisterPage} from "@pg/register";
import {UsersList} from "@pg/admin/userList";
import {TeamsList} from "@pg/admin/teamsList";
import {ProjectsList} from "@pg/admin/projectsList";

export function Pages() {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path={'/admin'} element={<UsersList/>}></Route>
      <Route path={'/admin/users'} element={<UsersList/>}></Route>
      <Route path={'/admin/teams'} element={<TeamsList/>}></Route>
      <Route path={'/admin/projects'} element={<ProjectsList/>}></Route>
    </Routes>
  )
}
