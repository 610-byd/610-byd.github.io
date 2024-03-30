import { createRouter, createWebHistory } from 'vue-router'
import {gsap} from 'gsap'


const pages = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default'
});
const pageComps = import.meta.glob('../views/**/index.vue');
const routes = Object.entries(pages).map(([path, meta]) => {
  const pageJSPath = path
  path = path.replace('../views', '').replace('/page.js', '') || '/';
  const name = path.split('/').filter(Boolean).join('-') || 'index';
  const compPath = pageJSPath.replace('page.js', 'index.vue')
  return {
    path,
    name,
    component: pageComps[compPath],
    meta
  }
},
)




const router = createRouter({
  history: createWebHistory(),
  routes
})





export default router