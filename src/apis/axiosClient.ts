import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://13.209.156.241:3000/api/',
})
export const setTokenAxios = (token: string) => {
  axiosClient.defaults.headers.common['Authorization'] = token
}

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
