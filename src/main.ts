import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(router);
app.use(MotionPlugin);
app.mount('#app');
