import App from '../App'
import Login from '../components/login'
import ForgotPW from '../components/ForgotPassword'
import NotFound from '../components/notfound'
import MyRouteProp from './MyRouteProp'
import TermsOfUse from '../components/TermsOfUse'
import RegisterAccount from '../components/RegisterAccount'
import Register from '../components/register'
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
    path: '/login/forgotpassword',
    element: <ForgotPW />,
    private: false,
  },
  {
    path: '/termsofuse',
    element: <TermsOfUse />,
    private: false,
  },
  {
    path: '/registeraccount',
    element: <RegisterAccount />,
    private: false,
  },
  {
    path: '/register',
    element: <Register />,
    private: false,
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  //   private: false,
  // },
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
