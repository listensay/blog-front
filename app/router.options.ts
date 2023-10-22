const customRoutes = [
  {
    name: 'home',
    path: '/index',
    component: () => import('../pages/index.vue')
  },
]
export default {
  routes: (_routes) => [
    ..._routes,
    ...customRoutes
  ]
}
