import axios from 'axios'

export default {
  install(Vue, options) {
    const { host } = options

    Vue.prototype.$ver = {
      get: (method, query) => {
        if (typeof query  === 'object') {
          const { params, contentType = 'application/json; charset=utf-8' } = query

          return axios({
            method: 'get',
            url: `${host}/${method}`,
            params: params,
            headers: { 'content-type': contentType },
          })
          .then(r => r.data)
        }

        const response = axios({
          method: 'get',
          url: `${host}/${method}`,
          params: query,
        }).
        then(r => r.data)

        return response
      },
      post: (method, query) => {
        if (typeof query === 'object') {
          const { params, contentType = 'application/json; charset=utf-8' } = query

          return axios({
            method: 'post',
            url: `${host}/${method}`,
            params: {
              data: params,
            },
            headers: { 'content-type': contentType },
          })
          .then(r => r.data)
        }

        const response = axios({
          method: 'post',
          url: `${host}/${method}`,
          params: {
            data: query,
          },
        })
        .then(r => r.data)

        return response
      }
    }
  }
}
