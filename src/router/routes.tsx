import App from '../App'
import Login from '../components/login'
import MyRouteProp from './MyRouteProp'
const routes: Array<MyRouteProp> = [
  {
    path: '/',
    element: <App />,
    private: true,
  },
  {
    path: '/login',
    element: <Login />,
    private: false,
  },
  {
    path: '/home',
    element: <p>HomePage</p>,
    private: false,
  },
]
export default routes
