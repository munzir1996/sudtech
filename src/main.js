import Vue from 'vue'
import VueRouter from 'vue-router'
import CKEditor from '@ckeditor/ckeditor5-vue';
import Multiselect from 'vue-multiselect'

Vue.use(VueRouter)
Vue.use( CKEditor );
Vue.component('multiselect', Multiselect)

import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import PostJob from './components/PostJob.vue'
import Description from './components/Description.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/postjob', component: PostJob },
    { path: '/postjob/description', component: Description },
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
