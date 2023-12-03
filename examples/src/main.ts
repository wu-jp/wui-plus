import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import WuButton from '@wui-plus/components/button'

const app = createApp(App)

// 挂载组件
app.use(WuButton)

app.use(router)

app.mount('#app')
