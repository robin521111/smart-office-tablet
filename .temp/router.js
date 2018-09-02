import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Outside from '@/components/Outsite.vue'

// import Tools from './components/Tools'

Vue.use(Router)

// export default new VueRouter({
//   routes:[
//     {
//       path:'/index',component:Index
//     }
//   ]

// })
module.exports = new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/outside',
    name: 'Outside',
    component: Outside
  }
  ]
})
