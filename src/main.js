// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 引入初始化样式文件
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
// 引入懒加载指令插件
import {lazyPlugin} from '@/directives'
const app = createApp(App)
// 引入全局组件插件
import { componentPlugin } from '@/components'
// 注册持久化插件
const pinia = createPinia() 
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
app.use(componentPlugin)


