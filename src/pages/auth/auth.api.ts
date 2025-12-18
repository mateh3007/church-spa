import Schema from './auth.schema'
import axios from '@/api'

const api = {}

const authCustomApi = () => ({
  async login(data: any) {
    return axios.post(`/${Schema.domain}/login`, data)
  },
})

export default api
export { api, authCustomApi }