/* global Vue */
import vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
