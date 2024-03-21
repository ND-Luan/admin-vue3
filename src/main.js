import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
loadFonts()

const pinia =createPinia()
createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
