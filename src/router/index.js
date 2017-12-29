import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
