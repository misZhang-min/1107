import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/index.vue'

import Timeline from '../views/home/timeline'
import My from '../views/home/my'
import Login from '../views/all/login.vue'
import Register from '../views/all/register.vue'
import Favor from '../views/all/favor.vue'
import Modify from '../views/all/modify.vue'
import Info from '../views/all/info.vue'
import Comment from '../views/all/comment.vue'
import Receive from '../views/all/receive.vue'
import Send from '../views/all/send.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 首页重定向到圈子
    name: 'home',
    redirect: '/home/timeline'
  },
  {
    path: '/login', // 登陆页面
    component:Login
  },
  {
    path: '/register',  // 注册页面
    component: Register
  },
  {
    path: '/favor', // 收藏页面
    component: Favor
  },
  {
    path: '/modify',  // 更改密码
    component: Modify
  },
  {
    path: '/info',  // 个人信息
    component: Info
  },
  {
    path: '/home',  // 首页
    component: Home,
    children: [{
      path: '/home/timeline', // 圈子
      component: Timeline
    },{
      path: '/home/my', // 我的
      component: My
    }]
  },
  {
    path: '/comment', // 评论
    component: Comment,
    children: [{
      path: '/comment/receive', // 收到的评论
      component: Receive
    },{
      path: '/comment/send',  //发出的评论
      component: Send
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const whiteList=['/login','/register']
router.beforeEach((to,from,next)=>{
  let isLogin=window.sessionStorage.getItem('isLogin');
  if(!isLogin){
    if(whiteList.indexOf(to.path)===-1){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
