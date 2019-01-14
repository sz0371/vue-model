import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/view/layout'

import ActivityManagement from '@/view/pages/activityManagement'
import ActivityList from '@/view/pages/activitiesList'
import ActivityDetail from '@/view/pages/activityDetail'

//活动列表--二级路由
import PanWei from '@/view/pages/asideNav/panwei'
import Wsz from '@/view/pages/asideNav/wsz'
import Zhuanzhuan from '@/view/pages/asideNav/zhuanzhuan'
import Qingqing from '@/view/pages/asideNav/qingqing'
import Songbo from '@/view/pages/asideNav/songbo'



Vue.use(Router)

export default new Router({
	mode: "history",
	linkActiveClass: "active", //全局配置
  routes: [
    {
      path: '/',  //首页
      name: 'LayOut',
      component: LayOut
    },
    {
      path: '/activityManagement',  //活动管理
      name: 'activityManagement',
      component: ActivityManagement
    },
    {
      path: '/activitiesList',  //活动列表
      name: 'activitiesList',
      component: ActivityList,
      redirect:"/activitiesList/wsz",
      children: [
      	{
		      path: 'panwei',  
		      name: 'panwei',
		      component: PanWei
		    },{
		      path: 'wsz',  
		      name: 'wsz',
		      component: Wsz
		    },{
		      path: 'zhuanzhuan',  
		      name: 'zhuanzhuan',
		      component: Zhuanzhuan
		    },{
		      path: 'songbo',  
		      name: 'songbo',
		      component: Songbo
		    },{
		      path: 'qingqing',  
		      name: 'qingqing',
		      component: Qingqing
		    }
      ]
    },
    {
      path: '/activityDetail',  //活动详情
      name: 'activityDetail',
      component: ActivityDetail
    }
  ]
})
