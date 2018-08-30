/* global Vue */
import Router from 'vue-router'
import Index from './components/Tools/Index.vue'
import Outside from './components/Tools/Outsite.vue'
import Tools from './components/Tools'

Vue.use(Router)

module.exports = new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '',
        component: Tools
      }
    ]
  }, {
    path: '/outside',
    name: 'Outside',
    component: Outside
  }
  ]
})
