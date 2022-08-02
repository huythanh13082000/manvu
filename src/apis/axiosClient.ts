import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const token = JSON.parse(localStorage.getItem('token') || '')
const axiosClient = axios.create({
  baseURL: 'http://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
