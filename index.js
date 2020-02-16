import axios from 'axios'

export default {
  install(Vue, options) {
    const { host } = options

    Vue.prototype.$req = {
      get: (method, params) => {
        if (typeof params  === 'object') {
          const { params, contentType = 'application/json; charset=utf-8' } = params

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
          params: params,
        }).
        then(r => r.data)

        return response
      },
      post: (method, params) => {
        if (typeof params === 'object') {
          const { params, contentType = 'application/json; charset=utf-8' } = params

          return axios({
            method: 'get',
            url: `${host}/${method}`,
            data: params,
            headers: { 'content-type': contentType },
          })
          .then(r => r.data)
        }

        const response = axios({
          method: 'get',
          url: `${host}/${method}`,
          data: params,
        })
        .then(r => r.data)

        return response
      }
    }
  }
}
