import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) // 라우터 플러그인을 Vue 인스턴스에 주입
app.mount('#app')
