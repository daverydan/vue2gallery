import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }, {
      path: '/about',
      name: 'About',
      component: About,
      alias: '/aboutus'
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/',
      name: 'Home',
      redirect: '/gallery'
    }
  ]
})
