import App from '../App'
import Login from '../components/login'
import NotFound from '../components/notfound'
import MyRouteProp from './MyRouteProp'
const routes: Array<MyRouteProp> = [
  {
    path: '/',
    element: <App />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: '/login',
    element: <Login />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
  {
    path: '/home',
    element: <p>HomePage</p>,
    private: true,
    roles: ['admin', 'user'],
  },
  {path: '/admin', element: <p>admin</p>, private: true},
  {
    path: '/notfound',
    element: <NotFound />,
    private: false,
  },
]
export default routes
