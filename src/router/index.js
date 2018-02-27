import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import newsDetail from '@/components/newsDetail'
import moments from '@/components/moments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
    	  name: 'newsdetail',
    	  path: '/newsdetail',
      component: newsDetail
    },
    {
    	  name: 'moments',
    	  path: '/moments',
      component: moments
    }
  ]
})
