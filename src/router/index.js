import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home'
import Tabs from 'components/tab/Tabs'
import Dariy from 'components/dariy/Dariy'
import Influence from 'components/influence/Influence'
import Me from 'components/me/Me'



Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dariy',
      name: 'Dariy',
      component: Dariy
    },
    {
      path: '/Influence',
      name: 'Influence',
      component: Influence
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    
  ]
})
