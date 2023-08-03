import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/',
      component: () => import('@/pages/UserLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/User/Home.vue')
        },
        {
          path: 'novel',
          children: [
            {
              path: ':novelId/detail',
              name: 'novelDetail',
              component: () => import('@/pages/User/NovelDetail.vue'),
            },
            {
              path: ':novelId/:partId',
              name: 'novelPart',
              component: () => import('@/pages/User/NovelPart.vue')
            },
            {
              path: ':novelId/edit',
              name: 'novelEdit',
              component: () => import('@/pages/User/NovelEdit.vue')
            },
            {
              path: ':novelId/:partId/edit',
              name: 'novelPartEdit',
              component: () => import('@/pages/User/NovelPartEdit.vue')
            }
          ]
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/pages/User/Profile.vue')
        }
      ]
    }
  ]
})

export default router
