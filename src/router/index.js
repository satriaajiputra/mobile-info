import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Detail from '@/components/Detail'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      component: Search,
      name: 'Search',
      path: '/search'
    },
   	{
   		component: Detail,
   		name: 'detail',
   		path: '/detail/:slug'
   	},
    {
      component: Home,
      name: 'home',
      path: '/'
    }
  ]
})
