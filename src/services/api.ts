import axios from 'axios'
//@ts-ignore
axios.defaults.headers.common.authorization = localStorage.getItem('token');
const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:4000'
})

export default api;