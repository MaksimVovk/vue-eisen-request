**# Only for Vue applications.**

## Description
Simple module for do requests from front end app to the server!
Based on module [axios](https://www.npmjs.com/package/axios)

## Features
 - get request
 - post request
 - upload file (in development)

## Use

 **main.js**
 ```
  import Vue from 'vue'
  import ver from 'vue-eisen-request'

  import App from './App.vue'

  const host = 'http://localhost:3000'

  Vue.component('App', App)
  Vue.use(ver, { host })

  new Vue({
    el: '#app',
    render (h) {
      return h('App')
    },
  })
```

**App.vue**

```
<template>
  ...
</template>

<script>
  export default {
    mounted () {
      const id = 10
      const user = this.$ver.post('getUsers', id)
    }
  }
</script>
```
