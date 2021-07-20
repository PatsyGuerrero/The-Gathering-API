import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {  path: '/p', name: 'container', component: App },
    // { path: '/:id', name: 'card', component: CardList,
    //   props: (route) => {
    //     let id = parseInt(route.params.id);
    //     return { id };
    //   } 
    // }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
