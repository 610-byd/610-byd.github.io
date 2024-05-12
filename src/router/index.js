import { createRouter, createWebHistory } from 'vue-router'

const pageComps = import.meta.glob('../views/**/index.vue');
const routes = Object.entries(pageComps).map(([path]) => {
  const pageJSPath = path
  path = path.replace('../views', '').replace('/index.vue', '') || '/';
  const name = path.split('/').filter(Boolean).join('-') || 'index';
  const compPath = pageJSPath.replace('page.js', 'index.vue')
  return {
    path,
    name,
    component: pageComps[compPath],
  }
},
)



const router = createRouter({
  history: createWebHistory(),
  routes
})





export default router