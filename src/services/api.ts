import axios, { AxiosRequestConfig } from 'axios'
import { getToken} from '../utils/getToken'
import swal from '../utils/swal'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
  timeout: 30000
})
api.defaults.headers!.post['Content-Type'] = 'application/json'
api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = getToken()

  if (token) {
    config.headers!.Authorization = 'Bearer ' + token
  }
  return config
}, error => Promise.reject(error))

api.interceptors.response.use(
  (response) => {
    return response
  }, (error) => {
    if (error.response && error.response.status === 401 && error.response.data.data?.authentication === false) {
      swal.onClose({
        title:"User not authenticated",
        icon: 'info',
        text: 'Faça o login novamente.',
        close: () => {
          document.location.href = '/'
          localStorage.clear()
        }
      })
    }
    return Promise.reject(error)
  }
)

export default api