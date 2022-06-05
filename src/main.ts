import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// 全局引入
import naive from 'naive-ui'

// localStorage.token=123


const app = createApp(App)

app.use(router)
app.use(naive)

app.mount('#app')
