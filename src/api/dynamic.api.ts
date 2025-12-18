// import axios from 'axios'
// import { useMirage } from '@/utils'
// import { typePage } from '@/enums'
// import router from '@/router'
// import { camelCase, kebabCase } from 'lodash'

// axios.defaults.baseURL = useMirage() ? '/api/v1' : import.meta.env.VITE_API_URL
// axios.defaults.withCredentials = true

// const mountPaginateParamsUrl = (data: {
//   endpoint: string
//   paginated: { page: number; itemsPerPage: number }
//   sort: { sortBy: string; sortDesc: boolean }
//   search?: { key: string; value: string }
// }) => {
//   let url = `${data.endpoint}?page=${data.paginated.page}&itemsPerPage=${data.paginated.itemsPerPage}`

//   if (data.sort) {
//     url += `&sortBy=${data.sort.sortBy}&sort=${data.sort.sortDesc}`
//   }

//   if (data.search && data.search.key && data.search.value) {
//     url += `&${data.search.key}=${data.search.value}`
//   }

//   return url
// }

// const mountQueryParams = (url: string, queryParams: any) => {
//   const queryString = new URLSearchParams(queryParams).toString()
//   const urlWithQueryParams = `${url}&${queryString}`

//   return urlWithQueryParams.endsWith('&') ? urlWithQueryParams.slice(0, -1) : urlWithQueryParams
// }

// const DynamicApi = (endpoint: string, schema: any, options: any) => ({
//   get domain() {
//     return schema.domain === kebabCase() ? schema.domain : camelCase(schema.domain)
//   },
//   async index(
//     data = {
//       paginated: { page: 1, itemsPerPage: 10 },
//       sort: { sortBy: 'createdAt', sortDesc: true },
//       search: { key: '', value: '' },
//       queryParams: {},
//     },
//   ) {
//     const { paginated, sort, search, queryParams } = data
//     let url = mountPaginateParamsUrl({ endpoint, paginated, sort, search })
//     url = mountQueryParams(url, queryParams)

//     let items = {
//       items: [],
//       statusCode: 200,
//       page: 1,
//       perPage: 10,
//       totalItems: 0,
//       totalPages: 0,
//     }
//     await axios
//       .get(url)
//       .then((res) => {
//         try {
//           if (options.formatResponse && typeof options.formatResponse === 'function') {
//             res.data.items.forEach((item: any) => {
//               options.formatResponse(item)
//             })
//           }
//         } catch (err) {
//           console.error(`DynamicApi Index error - FormatResponse: ${err}`)
//         }

//         items = {
//           items: res.data.items,
//           statusCode: res.status,
//           page: res.data.page,
//           perPage: res.data.perPage,
//           totalItems: res.data.totalItems,
//           totalPages: res.data.totalPages,
//         }
//       })
//       .catch((err) => {
//         console.error(`DynamicApi Index error: ${err}`)
//       })

//     return items
//   },
//   async show(uuid: string) {
//     return new Promise((resolve, reject) => {
//       let item = {}
//       axios
//         .get(`${endpoint}/${uuid}`)
//         .then((res) => {
//           item = res.data

//           if (options.formatResponse && typeof options.formatResponse === 'function') {
//             options.formatResponse(item, typePage.SHOW)
//           }
//           resolve(item)
//         })
//         .catch((err) => {
//           console.error(`DynamicApi Show error: ${err}`)

//           if (err.response?.status == 404) {
//             router.push({ name: schema.routes.list.name })
//             reject(`${schema.title} not found`)
//           }
//           reject(err.response)
//         })
//     })
//   },
//   async create(params: any) {
//     return new Promise((resolve, reject) => {
//       if (options.formatRequest && typeof options.formatRequest === 'function') {
//         params = options.formatRequest(params)
//       }

//       axios
//         .post(`${endpoint}`, params)
//         .then(({ data }) => {
//           resolve(data)
//         })
//         .catch((err) => {
//           console.error(`DynamicApi Create error: ${err}`)
//           reject(err.response)
//         })
//     })
//   },
//   async update(id: number, params: any) {
//     return new Promise((resolve, reject) => {
//       if (options.formatRequest && typeof options.formatRequest === 'function') {
//         params = options.formatRequest(params, typePage.SHOW)
//       }

//       axios
//         .put(`${endpoint}/${id}`, params)
//         .then(() => {
//           resolve(true)
//         })
//         .catch((err) => {
//           console.error(`DynamicApi Update error: ${err}`)
//           reject(err.response)
//         })
//     })
//   },
//   async delete(id: number) {
//     return new Promise((resolve, reject) => {
//       axios
//         .delete(`${endpoint}/${id}`)
//         .then(() => {
//           resolve(true)
//         })
//         .catch((err) => {
//           console.error(`DynamicApi Delete error: ${err}`)
//           reject(err.response)
//         })
//     })
//   },
// })

// export default DynamicApi