import axios from 'axios'

export default {
  install(Vue, options) {
    const { host } = options

    Vue.prototype.$ver = {
      get: (method, query) => {
        if (typeof query  === 'object') {
          return axios({
            method: 'get',
            url: `${host}/${method}`,
            params: query,
          })
          .then(r => r.data)
        }

        const response = axios({
          method: 'get',
          url: `${host}/${method}`,
          params: {
            params: query
          },
        }).
        then(r => r.data)

        return response
      },
      post: (method, query) => {
          return axios({
            method: 'post',
            url: `${host}/${method}`,
            params: {
              data: query,
            },
          })
          .then(r => r.data)
      }
    }
  }
}
