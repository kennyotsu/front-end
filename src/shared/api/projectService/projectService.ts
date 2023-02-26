import axios from "axios";

const API_URL = 'https://pp-luqq.onrender.com'
// const API_URL = 'http://loclalhost:3000'

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
export function createProject(props) {
  console.log(props)
  const {projectName, teamId} = props
  return axios
    .post('/projects/add', {name: projectName, id: teamId})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
export function removeProject(teamId) {
  return axios
    .post('/projects/delete', {id: teamId})
    .then(
      (res) => {
        res.data
        console.log(res.data)
      }
    )
}
