import App from '../App'
import MyRouteProp from './MyRouteProp'
const routes: Array<MyRouteProp> = [
  {
    path: '/',
    element: <App />,
    private: true,
  },
  {
    path: '/home',
    element: <p>HomePage</p>,
    private: false,
  },
]
export default routes
