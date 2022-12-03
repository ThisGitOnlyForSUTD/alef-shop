import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/styles.scss'
import '@/assets/scss/reset.scss'
import '@/assets/scss/fonts.css'
import store from './store'


createApp(App).use(store).mount('#app')
