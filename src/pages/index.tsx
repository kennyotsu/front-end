import React from 'react';
import { Route, Routes } from 'react-router'
import { HomePage } from './home'
import { LoginPage } from "./login";
import {RegisterPage} from "@pg/register";
import {AdminPage} from "@pg/admin";

export function Pages() {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/*<Route exact path="/profile" element={<ProfilePage />} />*/}
      {/*<Route exact path="/project" element={<WalletPage />} />*/}
      {/*<Route exact path="/contacts" element={<ContactsPage />} />*/}
      <Route path="/testbed" element={<AdminPage />} />
    </Routes>
  )
}
