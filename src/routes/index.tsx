import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/resume/',
    exact: true,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/home'))
      },
      {
        path: '',
        component: loadable(() => import('@/pages/not-found'))
      }
    ]
  }
]

export default routesConfig
