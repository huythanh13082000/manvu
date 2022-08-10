import axiosClient from '../apis/axiosClient'

export const fetchData = (url: string, method: string) => {
  axiosClient({
    method,
    url,
  })
}
