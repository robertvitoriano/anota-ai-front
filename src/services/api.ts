import axios from 'axios'
//@ts-ignore
const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:4000'
})

export default api;