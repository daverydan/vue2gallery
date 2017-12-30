import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Admin from '@/components/Admin'
import AdminUserList from '@/components/AdminUserList'
import AdminImageList from '@/components/AdminImageList'
import AdminDashboard from '@/components/AdminDashboard'
import AdminImageCreate from '@/components/AdminImageCreate'
import AdminImageEdit from '@/components/AdminImageEdit'
import AdminImageDelete from '@/components/AdminImageDelete'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/gallery'
    }, {
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
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          component: AdminDashboard
        }, {
          path: 'users',
          component: AdminUserList
        }, {
          path: 'images',
          component: AdminImageList
        }, {
          path: 'images/create',
          component: AdminImageCreate
        }, {
          name: 'editimages',
          path: 'images/edit/:id',
          component: AdminImageEdit
        }, {
          name: 'deleteimages',
          path: 'images/delete/:id',
          component: AdminImageDelete
        }
      ]
    }
  ]
})
