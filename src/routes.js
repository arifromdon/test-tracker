import Loadable from 'react-loadable'
import Loader from './components/elements/loader'

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./components/pages/dashboard'),
      loading: Loader,
    }),
  },
  {
    path: '/category',
    exact: true,
    component: Loadable({
      loader: () => import('./components/pages/category'),
      loading: Loader,
    }),
  },
]




