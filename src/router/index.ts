import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/sys/Login.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/sys/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Disabled.vue')
    },
    {
      path: '/disabled',
      name: 'disabled',
      component: () => import('../views/Disabled.vue'),
      children:[
        {
          path: 'article',
          name: 'article',
          component: () => import('../views/article/index.vue')
        },
        {
          path: 'article/edit',
          name: 'ArticleEdit',
          component: () => import('../views/article/edit.vue')
        },

      ]
    }
  ]
})

const witeList:string[] = ['/','/login','/404'];

router.beforeEach((to,from,next)=>{

  if(!witeList.includes(to.path) && localStorage.getItem('token') == ''){
    router.push('/login');
  }else{
    next();
  }
})


export default router
