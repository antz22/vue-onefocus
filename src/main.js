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

const PROD_FRONT_URL = 'https://onefocus.netlify.app'
const PROD_BACK_URL = 'https://onefocus.herokuapp.com'
// const DEV_URL = 'http://127.0.0.1:8000'
const DEV_URL = 'http://0.0.0.0:5000'
// const DEV_URL = 'http://192.168.1.126:8000'

axios.defaults.baseURL = (location.origin == PROD_FRONT_URL) ? PROD_BACK_URL : DEV_URL

// icons, css
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/index.css'

createApp(App).component(VueNumberInput.name, VueNumberInput).use(store).use(router, axios).use(VueProgressBar, options).mount('#app')
