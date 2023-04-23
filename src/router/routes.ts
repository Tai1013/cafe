import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'pages', component: () => import('@/views/layout/index.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
      { path: '/product', name: 'product', component: () => import('@/views/product/index.vue') },
      { path: '/about', name: 'about', component: () => import('@/views/about/index.vue') },
      { path: '/contact', name: 'contact', component: () => import('@/views/contact/index.vue') }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
