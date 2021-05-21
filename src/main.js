import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

// components
import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueNumberInput from "@chenfengyuan/vue-number-input";

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

// if the process is running on the heroku server (production)
if (process.env.APP_URL) {
  axios.defaults.baseURL = 'https://onefocus.herokuapp.com'
// if the process is accessed from local port (development)
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:8000'
}

const url = process.env.APP_URL || 'http://127.0.0.1:8000'

console.log('url: ', url)
console.log(process.env.PORT)
console.log(process.env.BASE_URL)
console.log(process.env.APP_URL)
console.log(process.env.DATABASE_URL)

// icons, css
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/index.css'

createApp(App).component(VueNumberInput.name, VueNumberInput).use(store).use(router, axios).use(VueProgressBar, options).mount('#app')
