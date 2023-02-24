import {create} from "zustand";

type State = {
  uid: string
  name: string
  surname: string
  phone: string
  email: string
  role: string
}
type Action = {
  updateUid: (uid: State['uid']) => void
  updateName: (name: State['name']) => void
  updateSurname: (surname: State['surname']) => void
  updatePhone: (phone: State['phone']) => void
  updateEmail: (email: State['email']) => void
  updateRole: (role: State['role']) => void
}

export const useUserStore = create<State & Action>((set) => ({
  uid: '',
  name: '',
  surname: '',
  phone: '+7',
  email: '',
  role: 'user',

  updateUid: (uid) => set(() => ({uid: uid})) ,
  updateName: (name) => set(() => ({name: name})) ,
  updateSurname: (surname) => set(() => ({surname: surname})) ,
  updatePhone: (phone) => set(() => ({phone: phone})) ,
  updateEmail: (email) => set(() => ({email: email})) ,
  updateRole: (role) => set(() => ({role: role})) ,
}))

