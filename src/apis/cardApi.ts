import axiosClient from './axiosClient'

const cardApi = {
  getAll() {
    const url = '/cities'
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
  },

  // getById(id: string): Promise<Student> {
  //   const url = `/students/${id}`
  //   return axiosClient.get(url)
  // },

  // add(data: Student): Promise<Student> {
  //   const url = '/students'
  //   return axiosClient.post(url, data)
  // },

  // update(data: Partial<Student>): Promise<Student> {
  //   const url = `/students/${data.id}`
  //   return axiosClient.patch(url, data)
  // },

  // remove(id: string): Promise<any> {
  //   const url = `/students/${id}`
  //   return axiosClient.delete(url)
  // },
}

export default cardApi
