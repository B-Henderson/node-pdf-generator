import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import styles from './styles/index.scss'
Vue.use(Buefy)

new Vue({
  el: '#app',
  components: { App }
})
