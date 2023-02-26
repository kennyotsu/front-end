import axios from "axios";

const API_URL = 'https://pp-luqq.onrender.com'

axios.defaults.baseURL = API_URL

export function fetchAllUsers() {
    return axios
      .get('/users')
      .then(
      (res) => {
        res.data.usersData[0]
        console.log(res.data.usersData[0])
      }
    )
}
export function removeUser(userId) {
  return axios
    .post('/users/delete', {id: userId})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
export function createUser(props) {
  console.log(props)
  return axios
    .post('/users', {props})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
