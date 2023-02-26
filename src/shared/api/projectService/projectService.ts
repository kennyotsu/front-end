import axios from "axios";

const API_URL = 'https://pp-luqq.onrender.com'

axios.defaults.baseURL = API_URL

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






