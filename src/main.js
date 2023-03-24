import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Login from '@/components/Login.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
