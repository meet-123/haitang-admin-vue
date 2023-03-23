import { createApp,getCurrentInstance } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import piniaPersist from 'pinia-plugin-persist'
const app = createApp(App)


const store = createPinia();
store.use(piniaPersist)


app.use(store);

app.use(router)
app.use(ElementPlus)
app.mount('#app')
