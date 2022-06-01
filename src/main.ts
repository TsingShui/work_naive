import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// 全局引入
import naive from 'naive-ui'
import LoadScript from "vue-plugin-load-script"


const app = createApp(App)
app.use(router)
app.use(naive)
app.use(LoadScript)

app.mount('#app')
