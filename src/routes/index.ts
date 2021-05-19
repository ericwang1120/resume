import Resume from '@/pages/resume'
import NotFound from '@/pages/not-found'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Resume
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '',
    exact: true,
    component: NotFound
  }
]

export default routesConfig
