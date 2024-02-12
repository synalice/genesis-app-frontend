import './assets/css/bootstrap.min.css'
import './assets/js/popper.min.js'
import './assets/js/bootstrap.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from 'unhead'

import App from './App.vue'
import router from './router'

const head = createHead()
head.push({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    }
  ]
})

const app = createApp(App)

app.provide('apiBaseUrl', 'http://localhost:3000')

app.use(createPinia())
app.use(router)

app.mount('#app')
