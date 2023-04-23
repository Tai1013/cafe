import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
