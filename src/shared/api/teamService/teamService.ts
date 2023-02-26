import axios from "axios";

const API_URL = 'https://pp-luqq.onrender.com'
// const API_URL = 'http://localhost:3000'

axios.defaults.baseURL = API_URL

// export function fetchAllUsers() {
//     return axios
//       .get('/users')
//       .then(
//       (res) => {
//         res.data.usersData[0]
//         console.log(res.data.usersData[0])
//       }
//     )
// }
export function createTeam(props) {
  console.log(props)
  const {teamName, ownerId} = props
  return axios
    .post('/teams/add', {name: teamName, id: ownerId})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
export function removeTeam(teamId) {
  return axios
    .post('/teams/delete', {id: teamId})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
