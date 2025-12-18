import axios from 'axios'


axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(`token`)

    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`)
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status == 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      const url = window.location.href.toString().split('/')
      if (url[url.length - 1] != 'entrar') {
        const urlRedirect = `${import.meta.env.VITE_BASE_URL}/entrar`
        window.location.assign(urlRedirect)
      }

      return Promise.reject(error)
    }

    return Promise.reject(error)
  },
)

export default axios